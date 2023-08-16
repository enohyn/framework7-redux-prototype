import { REQUEST_PRODUCTS, RECIEVED_PRODUCTS, RECIEVE_FAILED, RECIEVE_SINGLE_PRODUCT } from "../constants/action-types"

export const requestProducts = () => {
    return {
        type: REQUEST_PRODUCTS
    }
}

export const recievedProducts = (products) => {
    return {
        type: RECIEVED_PRODUCTS,
        payload: products
    }
}

export const productRecieveFailed = (error) => {
    return {
        type: RECIEVE_FAILED,
        payload: error
    }
}

export const selectedProduct = (product) => {
    return {
        type: RECIEVE_SINGLE_PRODUCT,
        payload: product
    }
}