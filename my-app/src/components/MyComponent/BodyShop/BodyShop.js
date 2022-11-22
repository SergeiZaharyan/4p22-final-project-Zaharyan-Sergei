import "./BodyShop.css";
import {ReactComponent as ImgCategoryElectric} from "../Img/Electric.svg";
import {ReactComponent as ImgCategoryHanger} from "../Img/Hanger.svg";
import {ReactComponent as ImgCategoryDiamond} from "../Img/Diamond.svg";
import Card from '../Card/Card';

function BodyShop () {
     return (
        <>
        <div className="BodyShopConteiner">
            <div className="BodyShopCategoryConteiner"> 
                <button className="BodyShopCategoryButton"><ImgCategoryElectric alt="Electric" className="BodyShopCategoryButtonImg" /> Clothing & Shoes</button>
                <button className="BodyShopCategoryButton"><ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />Electronics</button>
                <button className="BodyShopCategoryButton"><ImgCategoryDiamond alt="Diamond" className="BodyShopCategoryButtonImg" />Jsewelry</button>
            </div>
            <div className="BodyShopCardConteinerCard"> 
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
        </div>
        </>
     )
}
export default BodyShop;