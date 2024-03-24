import { Link } from "react-router-dom";
import "./Footer.css";
import restaurant from "../../assets/restaurant-footer.jpg";
import facebook from "../../assets/facebook-32px.png";
import instagram from "../../assets/instagram-32.png";
import tiktok from "../../assets/tiktok-32.png";
import youtube from "../../assets/youtube-32.png";

function Footer() {
    return (
        <footer>
            <img src={restaurant} alt="Inside Little Lemon Restaurant"></img>
            <div>
                <h2>Navigation</h2>
                <ul>
                    <li><Link to='/' className='nav-item'>Home</Link></li>
                    <li><Link to='/about' className='nav-item'>About</Link></li>
                    <li><Link to='/menu' className='nav-item'>Menu</Link></li>
                    <li><Link to='/reservations' className='nav-item'>Reservations</Link></li>
                    <li><Link to='/orderonline' className='nav-item'>Order Online</Link></li>
                    <li><Link to='/login' className='nav-item'>Login</Link></li>
                </ul>
            </div>
            <div>
                <h2>Contact Us</h2>
                <ul>
                    <li>W Monroe St 104</li>
                    <li>60603 Chicago, IL</li>
                    <li>+1 (312) 509-6995</li>
                    <li>info@littlelemon.com</li>
                </ul>
            </div>
            <div>
                <h2>Social Media</h2>
                <a href="https://www.facebook.com" rel="noreferrer" target="_blank"><img src={facebook} alt="Facebook" /></a>
                <a href="https://www.instagram.com" rel="noreferrer" target="_blank"><img src={instagram} alt="Instagram" /></a>
                <a href="https://www.tiktok.com" rel="noreferrer" target="_blank"><img src={tiktok} alt="TikTok" /></a>
                <a href="https://www.youtube.com" rel="noreferrer" target="_blank"><img src={youtube} alt="TikTok" /></a>
            </div>
        </footer>
    );
}

export default Footer;