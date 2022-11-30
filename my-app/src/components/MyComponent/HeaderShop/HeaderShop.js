import "./HeaderShop.css";
import {ReactComponent as ButtonImgSearch} from "../Img/Vector.svg";
import {ReactComponent as ButtonImgBasket} from "../Img/Basket.svg"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearBasket } from "../../../store/basket/basketSlice";

function HeaderShop ({onChange}) {
   const dispatch = useDispatch();
   const handleSearchChange = (event) => {
onChange(event.target.value)
   };
   const basket = useSelector((state) => state.basket);
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
               <button className={`HeaderShoploginButton HeaderShoploginButtonSize 
               ${basketOpen && 'active' }`} 
               onClick = { () => {setBasketOpen(basketOpen = !basketOpen)} }
               >
                  
               <ButtonImgBasket className="HeaderShopBasketButtonImg"  />
               </button> 
               <Link className="HeaderShoploginButton" to="/signin">Sign in</Link> 
               <Link className="HeaderShoploginButton" to="/signup">Sign up</Link>
            </div>
            {basketOpen && (
                     <div className="HeaderShopBasket">
                     {Object.values(basket).reduce((acc, item) => {
                        acc += item;
                        return acc;
                     }, 0)}
                        <button onClick={() => dispatch(clearBasket())}>Del</button>
                     </div>
                  )}
        </div>
        </>
     )
}
export default HeaderShop;