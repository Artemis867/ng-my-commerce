import { Injectable } from '@angular/core';
import { GET_PRODUCTS } from '../../../query/graphql';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { ProductListGQL } from '../../product-details/product-detail.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(
    private apollo: Apollo,
  ) { }

  getProducts(): any {
    return this.apollo.watchQuery<ProductListGQL>({
      query: GET_PRODUCTS
    })
    .valueChanges
      .pipe(
        map(({data, loading}) => data.getProductList)
      );
  }

  checkService(): boolean {
    return true;    
  }
}