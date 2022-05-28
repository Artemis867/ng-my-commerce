import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GET_PRODUCT_DETAILS } from 'src/app/my-commerce/query/graphql';
import { ProductDetails } from '../product-detail.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(
    private http: HttpClient,
    private apollo: Apollo
  ) { }

  getProductDetailsApollo(id: string): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_PRODUCT_DETAILS,
      variables: {
        productId: id
      }
    })
    .valueChanges
      .pipe(
        map(({data, loading}) => data.getProductDetails)
      );
  }

  getProductDetails(id: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`http://localhost:3000/products/${id}`);
  }
}