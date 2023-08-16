import axios from "axios"
import { REQUEST_PRODUCTS, RECIEVED_PRODUCTS, RECIEVE_FAILED, RECIEVE_SINGLE_PRODUCT, FETCH_PRODUCTS } from "../constants/action-types"
import { productsApi } from "../../apis/productsApi"

export const requestProducts = () => {
    return {
        type: REQUEST_PRODUCTS
    }
}

export const fetchProducts = () => async (dispatch) => {
    const response = await productsApi.get('/products')
    dispatch({ type: FETCH_PRODUCTS, payload: response.data.products })
}

export const fetchProduct =(id)=> async (dispatch)=>{
    const response = await productsApi.get(`/products/${id}`) 
    dispatch({type:RECIEVE_SINGLE_PRODUCT, payload:response.data})
}

// export const recievedProducts = (products) => {
//     return {
//         type: RECIEVED_PRODUCTS,
//         payload: products
//     }
// }

export const productRecieveFailed = (error) => {
    return {
        type: RECIEVE_FAILED,
        payload: error
    }
}

// export const selectedProduct = (product) => {
//     return {
//         type: RECIEVE_SINGLE_PRODUCT,
//         payload: product
//     }
// }