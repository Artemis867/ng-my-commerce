import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductDetails } from '../interface/product.interface';
import { ProductListService } from './services/product-list.service';
import * as ProductActions from '../../state/actions/product.actions';

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
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProducts());
    this.productList$ = this.store.select('product');
  }
}
