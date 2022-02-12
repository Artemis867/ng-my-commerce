import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ShoppingCartInterface } from './shopping-cart.interface';
@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})

export class ShoppingCartListComponent implements OnInit {
  orderedItems$: Observable<ShoppingCartInterface[]>;
  constructor() { }
  ngOnInit() {
    this.orderedItems$ = of(JSON.parse(localStorage.getItem('cart')));
  }
}
