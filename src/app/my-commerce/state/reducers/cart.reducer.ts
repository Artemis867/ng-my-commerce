import * as CartActions from '../actions/cart.actions';

export type Action = CartActions.All;
const defaultState = {
    
}

const newState = (state, newData) => {
    return Object.assign({}, state, newData);
}

export function CartReducer(state, action: Action) {
    switch(action.type) {
        case CartActions.ADD_CART:
            console.log('add to cart');
            return {...state}
        break;
    }
}