import './CardPopup.css';
import {ReactComponent as ImgCategoryDelete} from '../Img/Delete.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../../store/basket/basketSlice';
function CardPopup(props, id, title, description, price, image ) {
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
        <div className={`CardPopupWrapper ${props.isOpened ? 'open' : 'close'}`}>
            <div className="CardPopupConteiner">
            <div className="CardPopupClose" onClick={e => {
                 e.stopPropagation();
                 props.onPopupClose();
            }}>
                 <ImgCategoryDelete className="CardPopupCloseImg"/>
            </div>
            <div className="CardPopupConteinerBoxImg">
                <img className="CardPopupImg" alt={props.title} src={props.image} />
                <p className="CardPopupDescription">
                    {props.description}
                </p>    
            </div>
            <div className="CardPopupConteinerBoxPrice">
            <h1 className="CardPopupPrice">
                $ {props.price}
            </h1>
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
            </div>
            <div className="CardPopupTitle">
                {props.title}
            </div>
            
            </div>
        </div>
        );
    }
    
    export default CardPopup;