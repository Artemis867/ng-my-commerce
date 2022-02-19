import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OverlayComponent } from './overlay/overlay.component';
import { ShoppingCartInterface } from './shopping-cart.interface';
@Component({
  selector: 'app-shopping-cart-list',
  templateUrl: './shopping-cart-list.component.html',
  styleUrls: ['./shopping-cart-list.component.scss']
})

export class ShoppingCartListComponent implements OnInit {
  @ViewChildren(OverlayComponent) overlayComp: QueryList<OverlayComponent>;

  orderedItems$: Observable<ShoppingCartInterface[]>;
  overlay: boolean = false;
  constructor() { }
  ngOnInit() {
    this.orderedItems$ = of(JSON.parse(localStorage.getItem('cart')));
  }

  onSelectCartItem(product: string, idx): void {
    const searchComp = this.overlayComp.find((e, i) => i == idx);
    this.overlay = this.overlay? false : true;
    searchComp.show = this.overlay;
  }
}