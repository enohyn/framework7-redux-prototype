import { REQUEST_PRODUCTS, RECIEVE_FAILED, RECIEVE_SINGLE_PRODUCT, FETCH_PRODUCTS } from "../constants/action-types"


const initialState = {
    loading: false,
    products: [],
    error: ''
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        //before introducing middleware
        // case RECIEVED_PRODUCTS:
        //     return {
        //         ...state,
        //         products: action.payload
        //     }

        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }

        case RECIEVE_FAILED:
            {
                return {
                    ...state,
                    error: action.payload
                }
            }
        default:
            return state
    }
}

export const selectedProductReducer = (state = {}, action) => {
    switch (action.type) {
        case RECIEVE_SINGLE_PRODUCT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}