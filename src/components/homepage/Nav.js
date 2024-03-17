import { Link } from "react-router-dom";
import "./Nav.css";
import Header from "./Header";

function Nav() {
    return (
        <nav className="header-container">
            <Header />
            <Link to='/' className='nav-item'>Home</Link>
            <Link to='/about' className='nav-item'>About</Link>
            <Link to='/menu' className='nav-item'>Menu</Link>
            <Link to='/reservations' className='nav-item'>Reservations</Link>
            <Link to='/orderonline' className='nav-item'>Order Online</Link>
            <Link to='/login' className='nav-item'>Login</Link>
        </nav>
    );
}

export default Nav;