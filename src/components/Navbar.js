import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Store Tales</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/blog">Blogs</Link>
                <Link to="/products">Products</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link> 
            </div>
        </nav>
    );
}
 
export default Navbar;