import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from 'rxjs/operators';

import { ProductListService } from "../../widgets/product-list/services/product-list.service";
import * as ProductActions from '../actions/product.actions';

@Injectable()
export class ProductEffects {
    constructor(
        private actions$: Actions,
        private productListService: ProductListService
    ) {
    }

    loadProducts$ = createEffect(() => this.actions$.pipe(
           ofType(ProductActions.GET_PRODUCTS),
           mergeMap(() => this.productListService.getProducts().pipe(
                map(products => ({type: ProductActions.GET_PRODUCTS_SUCCESS, payload: products})),
                catchError(() => EMPTY)  
           ))
       ));
}