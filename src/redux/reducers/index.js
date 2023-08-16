import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./product-reducer";

export const reducers = combineReducers({
    allProducts:productReducer,
    product: selectedProductReducer
});