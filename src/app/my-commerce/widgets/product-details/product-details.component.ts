import { nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { maxQuantity } from './max-quantity.mock';
import { ProductDetails } from './product-detail.interface';

import { ProductDetailsService } from './services/product-details.service';

const MSG_OUT_STOCK = 'Out of stock';
const MSG_ADD_CART = 'Add to cart';
const MSG_INVALID_QTY = 'Invalid Quantity Provided';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {

  private product: string;
  productDetails$: Observable<ProductDetails>;
  addBtnLabel: string = MSG_ADD_CART;
  btnDisable: boolean = false;
  activeSize: string;
  private itemObj: Object;
  subProductDetail: Subscription;
  sizes: any;
  maxQuantity: Array<number> = maxQuantity;
  selectedQuantity: any;
  activeQuantity: boolean = false;

  @ViewChildren('sizeContainer') sizeContainer;

  constructor(
    private activeRoute: ActivatedRoute,
    private productDetailService: ProductDetailsService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.product = this.activeRoute.snapshot.paramMap.get('id');
    this.productDetails$ = this.productDetailService.getProductDetails(this.product);

    this.subProductDetail = this.productDetails$
    .subscribe(product => {
      this.sizes =  product.data.sizes;
    });
  }

  ngOnDestroy() {
    this.subProductDetail.unsubscribe();
  }

  onSelectSize(i, sizeName: string): void {
    this.selectedQuantity = null;
    this.activeSize = sizeName;
    this.updateSetProduct(i);
    if(this.sizes[sizeName] < 1) {
      this.activeQuantity = false;
      this.disableBtnState(true, MSG_OUT_STOCK);
    } else {
      this.disableBtnState(false);
      this.activeQuantity = true;
    }
  }

  onSelectorQuantityChange(): void {
    if (this.sizes[this.activeSize] < this.selectedQuantity) {
      this.disableBtnState(true, MSG_INVALID_QTY);
    } else {
      this.disableBtnState(false);
    }
  }

  doAddToCart(): void {
    if(localStorage.getItem('cart') === null) {
      this.itemObj = [{
        product: this.product,
        size: this.activeSize,
        quantity: this.selectedQuantity,
      }]; 
      localStorage.setItem('cart', JSON.stringify(this.itemObj));
      console.log('initial cart product added');
    } else {
      var cartItems = JSON.parse(localStorage.getItem('cart'));
      cartItems.push({product: this.product, size: this.activeSize, quantity: this.selectedQuantity});
      localStorage.setItem('cart', JSON.stringify(cartItems));
      console.log('updated cart');
    }
  }

  updateSetProduct(i): void {
    this.sizeContainer.toArray().map( dom => {
      dom.nativeElement.classList.remove('selected');
    });
    const selected = this.sizeContainer.toArray()[i].nativeElement;
    selected.classList.add('selected');
  }

  checkDisableBtn(disabled): string {
    return disabled? 'disabled' : null;
  }

  disableBtnState(set: boolean, error?: string): void {
    if( set ) {
      this.btnDisable = true;
      this.addBtnLabel = error;
    } else {
      this.btnDisable = false;
      this.addBtnLabel = MSG_ADD_CART;
    }
  }
}