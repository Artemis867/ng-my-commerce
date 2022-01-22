import { Component, OnInit, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  modalShoppingCartTitle = "My Shopping Cart"

  constructor() { }
  ngOnInit() {
  }
  
}
