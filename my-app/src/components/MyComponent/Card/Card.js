import './Card.css';
import CardPopup from '../CardPopup/CardPopup';
import {useState} from 'react';
function Card(props) {
    const [popup, setPopup] = useState({
        popup1: false
    })
    return (
            <div className="CardConteiner">
            <img className="CardImg" 
                 alt={props.title} src={props.image}  
                 onClick={() => setPopup({
                 ...popup, popup1: true})}  
            />
            <p className="CardDescription"
               onClick={() => setPopup({
               ...popup, popup1: true})}
            >
                {props.description}
            </p>
            <h1 className="CardPrice">
            $ {props.price}
            </h1>
            <div className="CardTitle"
                 onClick={() => setPopup({
                 ...popup, popup1: true})}
            >
                {props.title}
            </div>
            <button className="CardButton" >
                $BUY
            </button>
            
            <CardPopup 
            title={props.title}
            image={props.image}
            description={props.description}
            price={props.price}
            isOpened={popup.popup1} 
            onPopupClose={() => setPopup({...popup, popup1: false})}
            />
            </div>
    );
}


export default Card;
