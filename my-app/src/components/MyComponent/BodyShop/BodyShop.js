import "./BodyShop.css";
import {ReactComponent as ImgCategoryElectric} from "../Img/Electric.svg";
import {ReactComponent as ImgCategoryHanger} from "../Img/Hanger.svg";
import {ReactComponent as ImgCategoryDiamond} from "../Img/Diamond.svg";
function BodyShop () {
     return (
        <>
        <div className="BodyShopCategoryConteiner"> 
            <button className="BodyShopCategoryButton"><ImgCategoryElectric alt="Electric" className="BodyShopCategoryButtonImg" /> Clothing & Shoes</button>
            <button className="BodyShopCategoryButton"><ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />Electronics</button>
            <button className="BodyShopCategoryButton"><ImgCategoryDiamond alt="Diamond" className="BodyShopCategoryButtonImg" />Jsewelry</button>
        </div>
        <div className="BodyShopCardConteiner"> 
        БОЛЬШОЙ ТЕКСТ
        </div>
        </>
     )
}
export default BodyShop;