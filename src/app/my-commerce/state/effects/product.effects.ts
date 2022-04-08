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
    ) {}
}