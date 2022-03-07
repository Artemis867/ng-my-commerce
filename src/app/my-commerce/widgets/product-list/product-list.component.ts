import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductDetails } from '../interface/product.interface';
import { ProductListService } from './services/product-list.service';
import * as ProductActions from '../../state/actions/product.actions';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

const GET_PRODUCTS = gql`
  query Query {
    getProductList {
      _id,
      productName,
      sizes {
        S,
        M,
        L,
        XL
      },
      description
    } 
  }
`;

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  testProductList$: Observable<any>;
  productList$: Observable<ProductDetails[]>;
  constructor(
    private product: ProductListService,
    private store: Store<any>,
    private apollo: Apollo,
  ) { }

  ngOnInit() {
    this.productList$ = this.apollo.watchQuery<any>({
      query: GET_PRODUCTS
    })
      .valueChanges
        .pipe(
          map(({data, loading}) => data.getProductList)
        );

    // this.store.dispatch(new ProductActions.GetProducts());
    // this.productList$ = this.store.select('product');
  }
}
