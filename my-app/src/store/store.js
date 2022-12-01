import {configureStore} from "@reduxjs/toolkit"
import basketReducer from "./basket/basketSlice";
import counterReducer from './counter/counterSlice';
import productsSlice  from './products/productsSlise';

export default configureStore({

    reducer: {
        counter: counterReducer,
        basket: basketReducer,
        products: productsSlice
    }

});