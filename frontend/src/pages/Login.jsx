import { useNavigate } from 'react-router-dom';
import {login} from '../api/auth.js';
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function handleLogin(event) {
        event.preventDefault();
        setError("");
        try {
            const data = await login(email, password);

            localStorage.setItem('token', data.token);

            navigate('/app');
        } catch (error) {
            setError(error.message);
        }
    }

    return (
    <>
        <div className='container'>
            <div className='row justify-content-center mt-5'>
                <div className='col-md-4 col-lg-4 mt-5'>
                    <h1>Welcome to Linkbud!</h1>
                    
                    {error && (
                        <div className="alert alert-danger">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin}>
                        <div className='mb-3'>
                            <label
                                htmlFor="email"
                                className='form-label'
                            >
                                Email
                            </label>

                            <input
                                type="email"
                                id="email"
                                className='form-control'
                                required
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>

                        <div className='mb-3'>
                            <label
                                htmlFor="password"
                                className='form-label'
                            >
                                Password
                            </label>                           

                            <input
                                type="password"
                                id="password"
                                className='form-control'
                                required
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>

                        <button type="submit" className='btn btn-primary'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
    );
}

export default Login;