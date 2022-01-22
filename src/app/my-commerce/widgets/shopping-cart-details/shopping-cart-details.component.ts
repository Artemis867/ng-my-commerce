import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart-details',
  templateUrl: './shopping-cart-details.component.html',
  styleUrls: ['./shopping-cart-details.component.scss']
})

export class ShoppingCartDetailsComponent implements OnInit {

  constructor() { }
  @Input() item;
  @Input() storedProductList;
  ngOnInit() {
  }
}
