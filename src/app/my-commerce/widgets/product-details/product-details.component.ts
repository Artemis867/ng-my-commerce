import { Component, Input, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ProductDetails } from '../interface/product.interface';
import { ProductDetailsService } from './services/product-details.service';

const MSG_OUT_STOCK = 'Out of stock';
const MSG_ADD_CART = 'Add to cart';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  private product: string;
  productDetails$: Observable<ProductDetails>;
  addBtnLabel: string;
  btnDisable: boolean;
  activeSize: string;
  private itemObj: Object;

  @ViewChildren('sizeContainer') sizeContainer;

  constructor(
    private activeRoute: ActivatedRoute,
    private productDetailService: ProductDetailsService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.btnDisable = false;
    this.addBtnLabel = MSG_ADD_CART;
    this.product = this.activeRoute.snapshot.paramMap.get('id');
    this.productDetails$ = this.productDetailService.getProductDetails(this.product);
  }

  onHoverSize(i): void {
    const sizeContainerElem = this.sizeContainer.toArray()[i].nativeElement;
    let availNum = parseInt(sizeContainerElem.childNodes[0].innerText);
  
    if(availNum < 1) {
      this.btnDisable = true;
      this.addBtnLabel = MSG_OUT_STOCK;
    }
  }

  onSelectSize(i, sizeName: string): void {
    this.activeSize = sizeName;
    this.sizeContainer.toArray().map( dom => {
      dom.nativeElement.classList.remove('selected')
    });

    const selected = this.sizeContainer.toArray()[i].nativeElement;
    selected.classList.add('selected');

    const checkAvail = parseInt(selected.childNodes[0].innerText);
    if(checkAvail < 1) {
      this.addBtnLabel = MSG_OUT_STOCK;
      this.btnDisable = true;
    } else {
      this.addBtnLabel = MSG_ADD_CART;
      this.btnDisable = false;
    }
  }

  resetFilterBtn(): void {
    this.btnDisable = false;
    this.addBtnLabel = MSG_ADD_CART;
  }

  doAddToCart(): void {
    if(localStorage.getItem('cart') === null) {
      this.itemObj = [{
        product: this.product,
        size: this.activeSize
      }]; 
      localStorage.setItem('cart', JSON.stringify(this.itemObj));
      console.log('initial cart product added');
    } else {
      var cartItems = JSON.parse(localStorage.getItem('cart'));
      cartItems.push({product: this.product, size: this.activeSize});
      localStorage.setItem('cart',JSON.stringify(cartItems));
      console.log('updated cart');
    }
  }

}