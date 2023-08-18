import React, { useState, useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import {nanoid} from "nanoid";

function LoginPage({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // Added loading state
    const [error, setError] = useState(null); // Added error state
    const [isChecked, setIsChecked] = useState(false);

    const auth = getAuth();
    const navigate = useNavigate();

    const handleCheckboxChange = () => {
        console.log(isChecked)
        setIsChecked(!isChecked);
        console.log(isChecked)
    };

    const handleLogin = async () => {
        setIsLoading(true); // Show loading spinner
        setError(null); // Clear previous errors

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            localStorage.setItem('user', JSON.stringify(user));
            console.log('Logged in successfully:', user);
            setUser(user);
            setIsLoading(false); // Turn off loading
            const userToken = nanoid();
            const userHomePage = `/user/${userToken}`;
            navigate(userHomePage);
        } catch (error) {
            //setError(error.message); // Set error message
            setIsLoading(false); // Turn off loading
            if(error){
                setError("Wrong Username or Password")
            }
        }
    };

    return (
        <div className="login-page">
            <form className="login-form">
                <div className="heading">
                    <h2>Login</h2>
                </div>
                <div className="inputs">
                    <div className="input-container">
                        <label className="input-heading">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="login-input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <label className="input-heading">
                            Password
                            <a href="/" className="forgot-password-link">Forgot Password</a>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="login-input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <div className="remember-me">
                            <input
                                type="checkbox"
                                className={"remember-me-checkbox"}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <label>Remember Me</label>
                        </div>
                    </div>
                </div>

                <div className="button-container">

                    <button
                        className="login-button"
                        type="button"
                        onClick={handleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? "Logging In..." : "Login"}
                    </button>
                </div>
            </form>
            <div className="error">{error}</div>
            <a href={'/register'} className={"register"}>
                Create your Account
            </a>
        </div>
    );
}

export default LoginPage;
