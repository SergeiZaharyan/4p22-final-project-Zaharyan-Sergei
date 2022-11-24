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
    const [filtered, setFiltered] = useState(products);

    useEffect( () => {
            setFiltered(products)
        }, [products]);

    function todoFilter (category){
        if(category === 'all'){
            setFiltered(products)
        }else {
            let newProducts = [...products].filter(item => item.category === category)
            setFiltered(newProducts)
        };
    }
     return (
        <div className="BodyShopConteiner">
            <div className="BodyShopCategoryConteiner"> 
            <button className="BodyShopCategoryButton" onClick= {() => todoFilter(`all`)}> ALL</button>
                <button className="BodyShopCategoryButton"  onClick= {() => todoFilter(`women's clothing`)}>
                    <ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />
                    Women's clothing
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => todoFilter(`men's clothing`)}>
                    <ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />
                    Men's clothing
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => todoFilter('electronics')}>
                    <ImgCategoryElectric alt="Electric" className="BodyShopCategoryButtonImg" />
                    Electronics
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => todoFilter('jewelery')}>
                    <ImgCategoryDiamond alt="Diamond" className="BodyShopCategoryButtonImg" />
                    Jsewelry
                </button>
            </div>
            <div className="BodyShopCardConteinerCard"> 
           {
           filtered.map((item) => {
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