import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GET_PRODUCTS } from 'src/app/my-commerce/query/graphql';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { ProductDetails, ProductListGQL } from '../../product-details/product-detail.interface';
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(
    private http: HttpClient,
    private apollo: Apollo,
  ) { }

  headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});

  getProducts(): any {
    return this.apollo.watchQuery<ProductListGQL>({
      query: GET_PRODUCTS
    })
    .valueChanges
      .pipe(
        map(({data, loading}) => data.getProductList)
      );
  }
  
}