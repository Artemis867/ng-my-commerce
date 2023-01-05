import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {

  @Input() itemName;
  @Input() sizes;
  @Input() img = '';

  constructor() { }

  ngOnInit(): void {
    console.log('sizes: ', this.getSizeList());
    this.sizes = this.getSizeList();
  }

  getSizeList(): void {
    return this.sizes.
    map(({name}) => name);
  }

}
