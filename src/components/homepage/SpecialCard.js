import "./SpecialCard.css";

function SpecialCard(props) {
    return (
        <div className="spec-card">
            <img src={props.card.pic} alt="Weekly Special" />
            <div className="title-price">
                <h2>{props.card.title}</h2>
                <h3>{props.card.price}</h3>
            </div>
            <p>{props.card.description}</p>
            <h4>Order delivery  🛵</h4>
        </div>
    );
}

export default SpecialCard;