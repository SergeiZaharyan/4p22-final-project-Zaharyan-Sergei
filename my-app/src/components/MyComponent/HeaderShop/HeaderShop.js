import "./HeaderShop.css";
import {ReactComponent as ButtonImgSearch} from "../Img/Vector.svg";
import {ReactComponent as ButtonImgBasket} from "../Img/Basket.svg"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom";
import { useState } from "react";

function HeaderShop ({onChange}) {
   
   const handleSearchChange = (event) => {
onChange(event.target.value)
   };
   
   let [basketOpen, setBasketOpen] = useState(false);
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
               <button className="HeaderShopSearchButton"> 
               <ButtonImgSearch alt="search" className="HeaderShopSearchButtonImg" /> 
               </button>
            </div>
            <div className="HeaderShopLoginConteiner"> 
               <Link className="HeaderShoploginButton" to="/" >Main</Link>
               <Link className="HeaderShoploginButton HeaderShoploginButtonSize"to="/basket">
                  <ButtonImgBasket className="HeaderShopBasketButtonImg" />
               </Link> 
               <Link className="HeaderShoploginButton" to="/signin">Sign in</Link> 
               <Link className="HeaderShoploginButton" to="/signup">Sign up</Link>
            </div>
            
        </div>
        </>
     )
}
export default HeaderShop;