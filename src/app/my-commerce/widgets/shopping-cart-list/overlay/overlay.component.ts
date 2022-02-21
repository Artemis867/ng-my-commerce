import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() idx: number;
  @Input() product: string;

  @Output() emitRemoveCartItem: EventEmitter<string> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {}
  showOverlay(): string {
    const overlay = this.show ? 'show' : 'hide';
    return overlay;
  }

  onRemoveCartItem(product: string): void {
    // localStorage.setItem(
    //   'cart', 
    //   JSON.stringify(cartItems.filter(item => item.product !== product))
    // );
    this.emitRemoveCartItem.emit(product);
  }
}
