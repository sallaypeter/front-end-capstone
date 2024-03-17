import "./Testimonial.css";
import TestimonialCard from "./TestimonialCard";
import guest1 from "../../assets/guest1.jpg";
import guest2 from "../../assets/guest2.jpg";
import guest3 from "../../assets/guest3.jpg";
import guest4 from "../../assets/guest4.jpg";

function Testimonial() {
    const guests = [
        { rating: 5, pic: guest1, name: "Emily", quote: "Good atmosphere, delicious food."},
        { rating: 4, pic: guest2, name: "Julia", quote: "Excellent service, perfect menu."},
        { rating: 5, pic: guest3, name: "Tilly", quote: "Nice place. I recommend for families."},
        { rating: 5, pic: guest4, name: "Jack", quote: "Best Italian food. Kind service."}
    ];
    return (
        <div className="testimonials">
            <h1>Testimonials</h1>
            <div className="testimonial-cards">
                {guests.map(guest => <TestimonialCard guest={guest} />)}
            </div>
        </div>
    );
}

export default Testimonial;