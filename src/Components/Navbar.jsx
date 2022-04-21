import { Link } from 'react-router-dom';

function Navbar() {
return(
    <nav>
        <div className="site-title">
            <Link to="/"><h1 className='header-text'>DOUBLE-T PRODUCTIONS</h1></Link>
            <p>A no is just a yes, upside down</p>
        </div>
        <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="/login">Login</Link></li>
            <li> <Link to="/profile">Profile</Link></li>
        </ul>
    </nav>
    )
}

export default Navbar
