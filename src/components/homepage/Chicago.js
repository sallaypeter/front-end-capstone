import "./Chicago.css";
import brothers from "../../assets/brothers.png";

function Chicago() {
    return (
        <article className="chicago">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.</p>
                <br/>
                <p>To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </div>
            <img src={brothers} alt="Mario and Adrian"/>
        </article>
    );
}

export default Chicago;