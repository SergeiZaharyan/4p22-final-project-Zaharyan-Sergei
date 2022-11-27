import './CardPopup.css';
import {ReactComponent as ImgCategoryDelete} from '../Img/Delete.svg';
function CardPopup(props) {
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
            <button className="CardPopupButton">
                $BUY
            </button>
            </div>
            <div className="CardPopupTitle">
                {props.title}
            </div>
            
            </div>
        </div>
        );
    }
    
    export default CardPopup;