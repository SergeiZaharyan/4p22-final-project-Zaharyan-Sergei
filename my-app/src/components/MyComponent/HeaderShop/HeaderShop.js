import "./HeaderShop.css";
import ImgSearch from "../Img/Vector.svg";
import {ReactComponent as ButtonImgSearch} from "../Img/Vector.svg";
import {ReactComponent as ButtonImgBasket} from "../Img/Basket.svg"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom";

function HeaderShop () {
     return (
        <>
         <div className="HeaderShopConteiner">
            <Link className="HeaderShopLogoConteiner" to="/"> 
               <Logo/>
            </Link>

            <div className="HeaderShopSearchConteiner">
               <input type="search" placeholder="search" className="HeaderShopSearchInput" />
               <button className="HeaderShopSearchButton"> <ButtonImgSearch alt="search" className="HeaderShopSearchButtonImg" /> </button>
            </div>
            <div className="HeaderShopLoginConteiner"> 
               <Link className="HeaderShoploginButton" to="/" >Main</Link>
               <button className="HeaderShoploginButton HeaderShoploginButtonSize"><ButtonImgBasket className="HeaderShopBasketButtonImg"  /></button> 
               <Link className="HeaderShoploginButton" to="/signin">Sign in</Link> 
               <Link className="HeaderShoploginButton" to="/signup">Sign up</Link>
            </div>
        </div>
        </>
     )
}
export default HeaderShop;