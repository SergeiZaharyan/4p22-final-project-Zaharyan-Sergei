import "./BodyShop.css";
import {ReactComponent as ImgCategoryElectric} from "../Img/Electric.svg";
import {ReactComponent as ImgCategoryHanger} from "../Img/Hanger.svg";
import {ReactComponent as ImgCategoryDiamond} from "../Img/Diamond.svg";
import Card from '../Card/Card';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/products/productsSlise";


function BodyShop ({search}) {
    const [category, setCategory] = useState('all');
    const [products, isLoading] = useSelector((state) => [state.products.entities, state.products.loading]);
    const dispatch = useDispatch();

    useEffect(() =>{
        dispatch(getProducts());
    }, []);

    const filtered = products.filter(product => {
      if (category !== 'all' && product.category !== category) {
        return false;
      }

      if (search && (
        (product.title.toLowerCase().indexOf(search.toLowerCase()) + 1)
        || 
        (product.description.toLowerCase().indexOf(search.toLowerCase()) + 1)
      )) {
        return false;
      }

      return true;
    });

     return (
        <div className="BodyShopConteiner">
            <div className="BodyShopCategoryConteiner"> 
            <button className="BodyShopCategoryButton" onClick= {() => setCategory(`all`)}> ALL</button>
                <button className="BodyShopCategoryButton"  onClick= {() => setCategory(`women's clothing`)}>
                    <ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />
                    Women's clothing
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => setCategory(`men's clothing`)}>
                    <ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />
                    Men's clothing
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => setCategory('electronics')}>
                    <ImgCategoryElectric alt="Electric" className="BodyShopCategoryButtonImg" />
                    Electronics
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => setCategory('jewelery')}>
                    <ImgCategoryDiamond alt="Diamond" className="BodyShopCategoryButtonImg" />
                    Jsewelry
                </button>
            </div>
            <div className="BodyShopCardConteinerCard"> 
           {
           !isLoading && filtered.map((item, index) => {
                return <Card key={index}
                            id={item.id}
                             title={item.title}
                             image={item.image}
                             description={item.description}
                             price={item.price}/>
            })
            }
            {
            isLoading && (
                <h1>Loading...</h1>
            )
            }

            </div>
        </div>
     )
}
export default BodyShop;