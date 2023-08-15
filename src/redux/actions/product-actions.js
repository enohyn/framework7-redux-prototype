import { REQUEST_PRODUCTS, RECIEVED_PRODUCTS, RECIEVE_FAILED } from "../constants/action-types"

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