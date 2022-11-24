import './CardPopup.css';
function CardPopup(props) {
    return (
        <div className={`CardPopupWrapper ${props.isOpened ? 'open' : 'close'}`}
        onClick={e => {
            e.stopPropagation();
            props.onPopupClose();}}>
        
            <div className="CardPopupConteiner">
            <div className="CardPopupClose" onClick={e => {
                e.stopPropagation();
                props.onPopupClose();
            }}>X</div>
            <img className="CardPopupImg" alt={props.title} src={props.image} />
            <p className="CardPopupDescription">{props.description}</p>
            <h1 className="CardPopupPrice">$ {props.price}</h1>
            <div className="CardPopupTitle">{props.title}</div>
            <button className="CardPopupButton">$BUY</button>
            </div>
            </div>
        );
    }
    
    export default CardPopup;