import './Card.css';
import CardPopup from '../CardPopup/CardPopup';
import {useState} from 'react';
function Card(props) {
    const [popup, setPopup] = useState({
        popup1: false
    })
    return (
            <div className="CardConteiner" onClick={() => setPopup({
                ...popup, popup1: true})}>
            <img className="CardImg" alt={props.title} src={props.image}  />
            <p className="CardDescription">{props.description}</p>
            <h1 className="CardPrice">$ {props.price}</h1>
            <div className="CardTitle">{props.title}</div>
            <button className="CardButton" >$BUY</button>
            
            <CardPopup 
            isOpened={popup.popup1} 
            onPopupClose={() => setPopup({...popup, popup1: false})}
            />
            </div>
    );
}


export default Card;
