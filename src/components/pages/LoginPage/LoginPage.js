import './LoginPage.css';
import { nanoid } from 'nanoid';
import {useEffect, useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login({ setUser }) {
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
            <div className="login">
                <div>Email or Number</div>
                <input
                    type="text"
                    placeholder="Enter your email or number"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <div>Password</div>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
}