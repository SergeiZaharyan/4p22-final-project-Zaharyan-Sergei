import "./BodyShop.css";
import {ReactComponent as ImgCategoryElectric} from "../Img/Electric.svg";
import {ReactComponent as ImgCategoryHanger} from "../Img/Hanger.svg";
import {ReactComponent as ImgCategoryDiamond} from "../Img/Diamond.svg";
import Card from '../Card/Card';
import {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../store/products/productsSlise";


function BodyShop ({search}) {
    const [products, isLoading] = useSelector((state) => [state.products.entities, state.products.loading]);
    const dispatch = useDispatch();
    const [filtered, setFiltered] = useState(products);

    useEffect(() =>{
        dispatch(getProducts());
    }, []);

    useEffect( () => {
            setFiltered(products)
        }, [products]);
        
    function todoFilter (category, search){
        if((!category || category === 'all') && !search){
            setFiltered(products)
            return;
        }
        if(category) {
            let newProducts = [...products].filter(
            (item) => (item.category || item.description) === category,
                );
            setFiltered(newProducts)
        };
        if(search) {
            const newProducts = products
            .filter(v => ((v.title).toLowerCase()).indexOf(search.toLowerCase()) + 1 || ((v.description).toLowerCase()).indexOf(search.toLowerCase()) + 1)
            setFiltered(newProducts)
        };
    } 

     return (
        <div className="BodyShopConteiner">
            <div className="BodyShopCategoryConteiner"> 
            <button className="BodyShopCategoryButton" onClick= {() => todoFilter(`all`, search)}> ALL</button>
                <button className="BodyShopCategoryButton"  onClick= {() => todoFilter(`women's clothing`, search)}>
                    <ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />
                    Women's clothing
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => todoFilter(`men's clothing`, search)}>
                    <ImgCategoryHanger alt="Hanger" className="BodyShopCategoryButtonImg" />
                    Men's clothing
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => todoFilter('electronics', search)}>
                    <ImgCategoryElectric alt="Electric" className="BodyShopCategoryButtonImg" />
                    Electronics
                </button>

                <button className="BodyShopCategoryButton" onClick= {() => todoFilter('jewelery', search)}>
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
            </div>
        </div>
     )
}
export default BodyShop;