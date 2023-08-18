// RegisterPage.js

import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import {collection, doc, getDocs, getFirestore, setDoc} from "firebase/firestore"; // Import the CSS file for styling

function RegisterPage() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Added loading state
    const [error, setError] = useState(null); // Added error state

    const auth = getAuth();
    const firestore = getFirestore(); // Initialize Firestore
    const navigate = useNavigate();

    const handleRegister = async () => {
        setIsLoading(true); // Show loading spinner
        setError(null); // Clear previous errors

        if (username.length > 10) {
            setError("Username must be 10 characters or less");
            setIsLoading(false);
            return;
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setIsLoading(false); // Turn off loading
            return;
        }

        const lowercaseUsername = username.toLowerCase();

        try {
            // Check if username is already taken
            const usernameQuery = await getDocs(collection(firestore, "users"));
            const existingUsernames = usernameQuery.docs.map(doc => doc.data().username);
            if (existingUsernames.includes(lowercaseUsername)) {
                setError("Username is already taken");
                setIsLoading(false);
                return;
            }

            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log('Registered successfully:', user);

            const userDocRef = doc(firestore, "users", user.uid);
            await setDoc(userDocRef, {
                username: lowercaseUsername,
                firstname,
                lastname,
            });

            setIsLoading(false);
            navigate('/login');
        } catch (error) {
            setIsLoading(false);
            setError(error.message);
        }
    };

    return (
        <div className="register-page">
            <form className="register-form">
                <div className="heading">
                    <h2>Sign Up</h2>
                </div>
                <div className="inputs">
                    <div className="input-container">
                        <label className="input-heading">Firstname</label>
                        <input
                            type="text"
                            placeholder="Firstname"
                            className="register-input"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Lastname</label>
                        <input
                            type="text"
                            placeholder="Lastname"
                            className="register-input"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Username</label>
                        <input
                            type="text"
                            placeholder="Username"
                            className="register-input"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="register-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="register-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">Password</label>
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="register-input"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="error">{error}</div>
                <div className="button-container">
                    <button
                        className="register-button"
                        type="button"
                        onClick={handleRegister}
                        disabled={isLoading}
                    >
                        {isLoading ? "Registering..." : "Sign Up"}
                    </button>
                </div>
            </form>
        </div>
    );
}

export default RegisterPage;
