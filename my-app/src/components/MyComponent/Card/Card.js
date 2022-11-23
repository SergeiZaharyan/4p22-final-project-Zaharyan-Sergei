import './Card.css';
import CardPopup from '../CardPopup/CardPopup';

function Card(props) {
    return (
            <div className="CardConteiner">
            <img className="CardImg" alt={props.title} src={props.image} />
            <p className="CardDescription">{props.description}</p>
            <h1 className="CardPrice">$ {props.price}</h1>
            <div className="CardTitle">{props.title}</div>
            <button className="CardButton">$BUY</button>
            </div>
    );
}

export default Card;

Card.onclick = () => { <CardPopup />

};