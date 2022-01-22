import { Action } from '@ngrx/store';

export const ADD_CART = '[Add to Cart]';
export class AddToCart implements Action {
    readonly type = ADD_CART;
    constructor(public payload: any) {}
}

export type All = AddToCart;