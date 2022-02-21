import { Component, OnInit } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import { ShoppingCartInterface } from './shopping-cart.interface';
@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})

export class ShoppingCartListComponent implements OnInit {
  // orderedItems$: Observable<any>;
  // TODO: LOOK FOR A WAY TO MAKE THIS AS OBSERVABLE
  orderedItems: any;
  overlay: boolean = false;
  constructor() { }
  ngOnInit() {
    this.orderedItems = JSON.parse(localStorage.getItem('cart'));
  }

  removeCartItem(product: string): void {
    //TODO: LOOK FOR A WAY TO MAKE THIS AS OBSERVABLE
    const filterCart = this.orderedItems.filter( res => res.product != product);
    localStorage.setItem(
      'cart',
      JSON.stringify(filterCart)
    );
    this.orderedItems = filterCart;
  }
}