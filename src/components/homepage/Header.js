import "./Header.css";
import logo from "../../assets/little-lemon-logo.png";

function Header() {
    return (
        <header>
            <img id="header-logo" src={logo} alt="Little Lemon Logo"/>
        </header>
    );
}

export default Header;