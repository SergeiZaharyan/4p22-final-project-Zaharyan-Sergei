import './Card.css';
import CardPopup from '../CardPopup/CardPopup';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../../store/basket/basketSlice';
function Card({id, title, description, price, image }) {
    const [popup, setPopup] = useState({
        popup1: false
    })
    const dispatch = useDispatch();
    const products = useSelector((state) => state.basket);
    const onBuyClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
    dispatch(addToBasket(id));  
    }
    const onDeleteClick = (event) => {
        event.preventDefault();
        event.stopPropagation();  
        dispatch(removeFromBasket(id)); 
    }
    return (
            <div className="CardConteiner">
            <img className="CardImg" 
                 alt={title} src={image}  
                 onClick={() => setPopup({
                 ...popup, popup1: true})}  
            />
            <p className="CardDescription"
               onClick={() => setPopup({
               ...popup, popup1: true})}
            >
                {description}
            </p>
            <h1 className="CardPrice">
            $ {price}
            </h1>
            <div className="CardTitle"
                 onClick={() => setPopup({
                 ...popup, popup1: true})}
            >
                {title}
            </div>
            {!products[id] &&  <button className="CardButton" onClick={onBuyClick}>
                $BUY
            </button>}
            {products[id] && (
            <div className='CardButtonCounterConteiner'>
            <button className="CardButton CardButtonColorGreen" onClick={onBuyClick}>
                +
            </button>
            <div className="CardButton CardButtonSize">
                {products[id]}
            </div>
            <button className="CardButton CardButtonColorRed" onClick={onDeleteClick}>
                -
            </button>
            </div>
            )}
            <CardPopup 
            id={id}
            title={title}
            image={image}
            description={description}
            price={price}
            isOpened={popup.popup1} 
            onPopupClose={() => setPopup({...popup, popup1: false})}
            />
            </div>
    );
}


export default Card;
