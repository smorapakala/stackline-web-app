import { SET_PRODUCT } from '../actions/productActions.tsx';
import { Product } from '../../types/product.tsx';
export interface ProductState {
    productData: Product | null;
}

const initialState: ProductState = {
    productData: null,
};


export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCT: {
            return { ...state, productData: action.payload };
        }
        default:
            return state;
    }
};
