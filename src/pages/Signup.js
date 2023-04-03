import './Signup.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

const Signup = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pwd, setPwd] = useState('');

    return (
        <div className="signup">
            <div className="signup-form">
                <h1>Create an account</h1>
                <p>Don't miss out on the latest products and promotions</p>
                <form>
                    <label>Name</label>
                    <input 
                        type="text" 
                        required
                        placeholder='Enter your name'
                        value={ name } 
                        onChange={(e) => setName(e.target.value)}
                    />
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
                    <button>SIGN UP</button>
                    {/* <div className="last">
                        <button>SIGNUP</button>
                    </div> */}
                </form>
            </div>
            <p className='footer-text'>Already have an account? <em><Link to="/login">Log in</Link></em></p>
        </div>
    );
}
 
export default Signup;