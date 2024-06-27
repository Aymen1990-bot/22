import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3000/api/auth/signup', { username, password });
            navigate('/login');
            toast.success('Signup successful');
        } catch (error) {
            toast.error('Signup failed');
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupPage;
