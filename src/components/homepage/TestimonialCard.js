import "./TestimonialCard.css";

function TestimonialCard(props) {
    let stars = "";
    for (let i = 0; i < props.guest.rating; i++) {
        stars = stars + "⭐️";
    }
    return (
        <div className="testimonial-card">
            <p id="stars">{stars}</p>
            <div className="pic-name">
                <img src={props.guest.pic} alt="Guest" />
                <h3>{props.guest.name}</h3>
            </div>
            <p>{props.guest.quote}</p>
        </div>
    );
}

export default TestimonialCard;