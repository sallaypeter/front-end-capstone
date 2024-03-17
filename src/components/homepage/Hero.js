import "./Hero.css";
import hero from "../../assets/hero.jpg";
import { Link } from "react-router-dom";

function Hero() {
    return (
        <article className="hero">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <Link to='/reservations' className='nav-item'>Reserve a Table</Link>
            </div>
            <img src={hero} alt="Hero"/>
        </article>
    );
}

export default Hero;