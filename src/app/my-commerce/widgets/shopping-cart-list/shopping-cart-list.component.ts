import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as ProductActions from '../../state/actions/product.actions';
@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})
export class ShoppingCartListComponent implements OnInit {
  itemList$: Observable<any>;
  storedProductList$: Observable<any>;
  list: any;
  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.store.dispatch(new ProductActions.GetProducts());
    this.storedProductList$ = this.store.select('product');
    this.itemList$ = of(this.getLocalStorageItemList());

    this.storedProductList$.subscribe(res => {
      this.list = res.data;
    })
  }

  getLocalStorageItemList() {
    return JSON.parse(localStorage.getItem('cart'));
  }

}
