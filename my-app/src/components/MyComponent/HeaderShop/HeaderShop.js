import "./HeaderShop.css";
import {ReactComponent as ButtonImgSearch} from "../Img/Vector.svg";
import {ReactComponent as ButtonImgBasket} from "../Img/Basket.svg"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom";

function HeaderShop ({onChange}) {
   
   const handleSearchChange = (event) => {
onChange(event.target.value)
   };
   
   
     return (
        <>
         <div className="HeaderShopConteiner">
            <Link className="HeaderShopLogoConteiner" to="/"> 
               <Logo/>
            </Link>

            <div className="HeaderShopSearchConteiner">
               <input type="search" 
               placeholder="search" 
               className="HeaderShopSearchInput" 
               onChange={handleSearchChange}
               />
               <div className="HeaderShopSearchContainer"> 
               <ButtonImgSearch alt="search" className="HeaderShopSearchButtonImg" /> 
               </div>
            </div>
            <div className="HeaderShopLoginConteiner"> 
               <Link className="HeaderShoploginButton" to="/" >Main</Link>
               <Link className="HeaderShoploginButton HeaderShoploginButtonSize"to="/basket">
                  <ButtonImgBasket className="HeaderShopBasketButtonImg" />
               </Link> 
               <Link className="HeaderShoploginButton" to="/Feedback">Feedback</Link>
            </div>
            
        </div>
        </>
     )
}
export default HeaderShop;