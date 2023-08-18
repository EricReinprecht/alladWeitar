import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import {nanoid} from "nanoid";

function LoginPage({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Logged in successfully:', user);
            setIsLoggedIn(true);
            setUser(user); // Set the user data
        } catch (error) {
            console.error('Login error:', error.message);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            const userToken = nanoid(); // Generate a unique token
            const userHomePage = `/user/${userToken}`; // Use the token in the URL
            navigate(userHomePage); // Redirect to user home page
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="login-page">
            <form className="login-form">
                <div className="heading">
                    <h2>Login</h2>
                </div>
                <div className="inputs">
                    <div className="input-container">
                        <input
                            type="email"
                            placeholder="Email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="button-container">
                    <button type="button" className={"login-button"} onClick={handleLogin}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginPage;
