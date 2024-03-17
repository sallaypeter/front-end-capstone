import "./Highlights.css";
import { Link } from "react-router-dom";
import SpecialCard from "./SpecialCard";
import greeksalad from "../../assets/greek salad.jpg";
import bruchetta from "../../assets/bruchetta.svg";
import lemondessert from "../../assets/lemondessert.jpg";

function Highlights() {
    const cards = [
        { pic: greeksalad, title: "Greek Salad", price: "$12.99", description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." },
        { pic: bruchetta, title: "Bruchetta", price: "$5.99", description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." },
        { pic: lemondessert, title: "Lemon Dessert", price: "$5.00", description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined." }
    ];

    return (
        <>
            <div className="spec-container">
                <h1>Specials</h1>
                <Link to='/menu' className='nav-item'>Online Menu</Link>
            </div>
            <div className="spec-cards">
                {cards.map(card => <SpecialCard card={card}/>)}
            </div>
        </>
    );
}

export default Highlights;