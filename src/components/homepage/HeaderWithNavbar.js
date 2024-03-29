import "./HeaderWithNavbar.css";
import logo from "../../assets/little-lemon-logo.png";
import menu from "../../assets/ll-menu.svg";
import close from "../../assets/ll-close.svg";
import { Link } from "react-router-dom";
import { useRef } from "react";

function HeaderWithNavbar() {
    const sidebarRef = useRef(null);

    const showSidebar = () => {
        sidebarRef.current.style.display = "flex";
    }

    const hideSidebar = () => {
        sidebarRef.current.style.display = "none";
    }

    return (
        <header>
            <Link className="logo-link" to='/'><img src={logo} alt="Little Lemon Logo"/></Link>
            <nav>
                <ul ref={sidebarRef} className="sidebar">
                    <li onClick={hideSidebar}>
                        <Link to='#' ><img src={close} alt="Close Mobile Menu"/></Link>
                    </li>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/menu'>Menu</Link>
                    </li>
                    <li>
                        <Link to='/reservations'>Reservations</Link>
                    </li>
                    <li>
                        <Link to='/orderonline'>Order Online</Link>
                    </li>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                </ul>
                <ul className="topbar">
                    <li className="hideOnMobile">
                        <Link to='/'>Home</Link>
                    </li>
                    <li className="hideOnMobile">
                        <Link to='/about'>About</Link>
                    </li>
                    <li className="hideOnMobile">
                        <Link to='/menu'>Menu</Link>
                    </li>
                    <li className="hideOnMobile">
                        <Link to='/reservations'>Reservations</Link>
                    </li>
                    <li className="hideOnMobile">
                        <Link to='/orderonline'>Order Online</Link>
                    </li>
                    <li className="hideOnMobile">
                        <Link to='/login'>Login</Link>
                    </li>
                    <li className="menu-button" onClick={showSidebar}>
                        <Link to='#' ><img src={menu} alt="Open Mobile Menu"/></Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderWithNavbar;