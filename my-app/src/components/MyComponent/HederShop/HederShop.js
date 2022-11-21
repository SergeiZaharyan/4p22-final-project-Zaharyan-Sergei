import "./HederShop.css";
import ImgSearch from "../Img/Vector.svg";
import {ReactComponent as ButtonImgSearch} from "../Img/Vector.svg";
import Logo from "../Logo/Logo"

function HederShop () {
     return (
        <>
         <div className="HederShopConteiner">
            <a className="HederShopLogoConteiner" href="../index.js"> 
               <Logo/>
            </a>
            <div className="HederShopSearchConteiner">
               <img src={ImgSearch} alt="search" className="HederShopSearchImg" />
               <input type="search" placeholder="search" className="HederShopSearchInput" />
               <button className="HederShopSearchButton"> <ButtonImgSearch alt="search" className="HederShopSearchButtonImg" /> </button>
            </div>
            <div className="HederShopLoginConteiner"> 
               <button className="HederShoploginButton">Sign in</button> 
               <button className="HederShoploginButton">Sign up</button>
            </div>
        </div>
        </>
     )
}
export default HederShop;