import './Login.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    return (
        <div className="login">
            <div className="login-form">
                <h1>Welcome Back!</h1>
                <p>The faster you fill up, the faster you get your products!</p>
                <form>
                    <label>Email</label>
                    <input 
                        type="email" 
                        required
                        placeholder='Enter your email'
                        value={ email } 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label>Password</label>
                    <input 
                        type="password" 
                        required
                        placeholder='Enter your password'
                        value={ pwd } 
                        onChange={(e) => setPwd(e.target.value)}
                    />
                    <div className="last">
                        <button>LOGIN</button>
                        <a href="">Forgot password?</a>
                    </div>
                </form>
            </div>
            <p className='footer-text'>Don't have an account? <em><Link to="/signup">Signup</Link></em></p>
        </div>
    );
}
 
export default Login;