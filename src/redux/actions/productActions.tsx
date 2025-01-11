import { Product } from "../../types/product";

export const SET_PRODUCT = 'SET_PRODUCT';

export const setProduct = (product: Product) => {
    return {
        type: SET_PRODUCT,
        payload: product
    };
};