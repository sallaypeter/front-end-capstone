import "./NotImplemented.css";
import construction from "../../assets/construction.svg"

function NotImplemented() {
    return (
        <div className="notimplemented">
            <h1>Not yet implemented.</h1>
            <img src={construction} alt="Under Construction" />
        </div>
    );
}

export default NotImplemented;