import './CardPopup.css';

function CardPopup(props) {
    return (
            <div className="CardPopupConteiner">
            <img className="CardPopupImg" alt={props.title} src={props.image} />
            <p className="CardPopupDescription">{props.description}</p>
            <h1 className="CardPopupPrice">$ {props.price}</h1>
            <div className="CardPopupTitle">{props.title}</div>
            <button className="CardPopupButton">$BUY</button>
            </div>

        );
    }
    
    export default CardPopup;