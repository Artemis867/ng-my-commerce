import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../state/actions/product.actions';
import { filter, map } from 'rxjs/operators';
import { ProductDetails } from '../interface/product.interface';
import { StoredProductList } from './shopping-cart.interface';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})

export class ShoppingCartDetailsComponent implements OnInit {
  
  constructor(
    private store: Store<any>,
  ) { }
  subscriptionProdList: Subscription;
  storedProductList$: Observable<any>;
  productDetails: any;
  @Input() item;
  @Input() indx;

  @Output() emitRemoveItemCart: EventEmitter<string> = new EventEmitter()
  show: boolean = false;

  ngOnInit() {
    console.log('item data: ', this.item);
    this.productDetails = this.item;
  }

  findProductDetail(prodDetailList: any): any {
    return prodDetailList
    .find(searchItem => searchItem._id == this.item.product);
  }

  onSelectCartItem(): void {
    this.show = this.show ? false : true;
  }

  removeCartItem(product: string): void {
    this.emitRemoveItemCart.emit(product);
  }

}
