import "./BodyShop.css";
import {ReactComponent as ImgCategoryElectric} from "../Img/Electric.svg";
import {ReactComponent as ImgCategoryHanger} from "../Img/Hanger.svg";
import {ReactComponent as ImgCategoryDiamond} from "../Img/Diamond.svg";
import Card from '../Card/Card';
import {useEffect, useState} from 'react';

function BodyShop () {
    const [products, setProducts] =useState([]);
    useEffect(() =>{
        fetch('https://fakestoreapi.com/products/')
            .then((response) => response.json())
            .then((result) => {
                setProducts(result);
            })
    }, []);
     return (
        <div className="BodyShopConteiner">
            <div className="BodyShopCategoryConteiner"> 
                <button className="BodyShopCategoryButton"><ImgCategoryElectric alt="Electric" className="BodyShopCategoryButtonImg" /> Clothing & Shoes</button>
                <button className="BodyShopCategoryButton"><ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />Electronics</button>
                <button className="BodyShopCategoryButton"><ImgCategoryDiamond alt="Diamond" className="BodyShopCategoryButtonImg" />Jsewelry</button>
            </div>
            <div className="BodyShopCardConteinerCard"> 
           {
           products.map((item) => {
                return <Card key={item.id}
                             title={item.title}
                             image={item.image}
                             description={item.description}
                             price={item.price}/>
            })
            }
            </div>
        </div>
     )
}
export default BodyShop;