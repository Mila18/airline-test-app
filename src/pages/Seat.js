import scheme from "../images/Scheme.jpg"
import "./css/schemeStyle.css"
function Seat(){
    return(
        <div className="scheme">
            <img src={scheme} alt="planeScheme" width="100%" height="100%"/>
            <svg>
                <polygon data-id="1" points=""></polygon>
                <polygon data-id="2" points=""></polygon>
                <polygon data-id="3" points=""></polygon>
                <polygon data-id="4" points=""></polygon>
                <polygon data-id="5" points=""></polygon>
                <polygon data-id="6" points=""></polygon>
                <polygon data-id="7" points=""></polygon>
                <polygon data-id="8" points=""></polygon>
                <polygon data-id="9" points=""></polygon>
                <polygon data-id="10" points=""></polygon>
                <polygon data-id="11" points=""></polygon>
                <polygon data-id="12" points=""></polygon>
            </svg>
        </div>
    );
}

export default Seat;