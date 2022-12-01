import './Basket.css';
import Card from '../../components/MyComponent/Card/Card';
import { useSelector } from 'react-redux';




function BasketPages () {
   const products = useSelector(state => state.products.entities);
const basket = useSelector(state => state.basket);

return(
    <div className="Basket">
       {products
         .filter((product) => !!basket[product.id])
         .map((item, index) => {
          return <Card key={index}
                      id={item.id}
                       title={item.title}
                       image={item.image}
                       description={item.description}
                       price={item.price}> </Card>
       })}
    </div>
 )}
 export default BasketPages;