import {configureStore} from "@reduxjs/toolkit"
import basketReducer from "./basket/basketSlice";
import counterReducer from './counter/counterSlice';

export default configureStore({

    reducer: {
        counter: counterReducer,
        basket: basketReducer
    }

});