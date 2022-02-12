import { Action } from '@ngrx/store';

export const GET_PRODUCTS = '[GET PRODUCTS]';
export const GET_PRODUCTS_SUCCESS = '[GET PRODUCTS SUCCESS]';
export const GET_PRODUCTS_FAILED = '[GET PRODUCTS FAIL]';

export class GetProducts implements Action {
    
    readonly type = GET_PRODUCTS;
    constructor() {}
}

export class GetProductsSuccess implements Action {
    readonly type = GET_PRODUCTS_SUCCESS;
    constructor(public payload: any) {}
}

export class GetProductsFailed implements Action {
    readonly type = GET_PRODUCTS_FAILED;
    constructor(public payload: any) {}
}

export type All = GetProducts | GetProductsSuccess | GetProductsFailed;