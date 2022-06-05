import * as ProductActions from '../actions/product.actions';

export type Action = ProductActions.All;

const initialState = [];

export function ProductReducer(state = initialState, action: Action) {
    switch(action.type) {
        case ProductActions.GET_PRODUCTS:
            return [...state];
        break;
        case ProductActions.GET_PRODUCTS_SUCCESS:
            return action.payload;
        break;
        case ProductActions.GET_PRODUCTS_FAILED:
            return {...state};
        break;
        case ProductActions.ADD_TO_CART:
            return [...state, action.payload];
        break;
    }
}