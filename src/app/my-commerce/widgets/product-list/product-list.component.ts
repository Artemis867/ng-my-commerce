import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDetails } from '../interface/product.interface';
import { ProductListService } from './services/product-list.service';
import { Apollo, gql } from 'apollo-angular';

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
    private productListService: ProductListService,
  ) { }

  ngOnInit() {
    this.productList$ = this.productListService.getProducts();
  }
}
