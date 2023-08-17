import React, { useState } from 'react';
import {auth, db} from '../../../firebaseConfig'
import './LoginPage.css'


function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userData, setUserData] = useState(null); // Store user data

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await auth.signInWithEmailAndPassword(email, password);
            // Successful login, fetch user data from Firestore
            const userDoc = await db.collection('users').doc(auth.currentUser.uid).get();
            if (userDoc.exists) {
                setUserData(userDoc.data());
            }
        } catch (error) {
            console.error('Error logging in:', error);
            // Handle error (display error message, etc.)
        }
    };

    console.log("hallo")

    return (
        <div className="login-page">
            <form className="login-form">
                <div className={"heading"}><h2>Login</h2></div>
                <div className={"inputs"}>
                    <div className={"input-container"}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="login-input"
                            // ... Other input attributes ...
                        />
                    </div>
                    <div className={"input-container"}>
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                        />
                    </div>
                </div>
                <div className={"button-container"}>
                    <button type="submit" className="login-button">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;