import { Component, OnDestroy, OnInit, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
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
  productDetails$: Observable<any>;
  productDetailsApollo$: Observable<any>;
  addBtnLabel: string = MSG_ADD_CART;
  btnDisable: boolean = false;
  activeSize: string;
  private itemObj: Object;
  subProductDetail: Subscription;
  sizes$: Observable<any>;
  maxQuantity: Array<number> = maxQuantity;
  selectedQuantity: any;
  selectedAvailQuantity: any = 0;
  activeQuantity: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  storeObs$: Observable<any>;

  @ViewChildren('sizeContainer') sizeContainer;

  constructor(
    private activeRoute: ActivatedRoute,
    private productDetailService: ProductDetailsService,
    private store: Store,
  ) { }

  ngOnInit() {
    this.product = this.activeRoute.snapshot.paramMap.get('id');
    this.productDetails$ = this.productDetailService.getProductDetailsApollo(this.product);
    this.sizes$ = this.getSizeProduct();
    this.getSizeProduct();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  getSizeProduct(): Observable<any> {
    return this.productDetails$.pipe(map(res => res.sizes));
  }

  onSelectSize(i, sizeName: string): void {
    this.selectedQuantity = null;
    this.activeSize = sizeName;
    this.updateSetProduct(i);

    this.sizes$.pipe(
      takeUntil(this.destroy$)
    )
    .subscribe(size => {
      console.log('size data: ', size[sizeName]);
      if(size[sizeName] > 0) {
        this.activeQuantity = true;
        this.disableBtnState(false);
        this.selectedAvailQuantity = size[sizeName];
        return;
      }

      this.activeQuantity = true;
      this.disableBtnState(true, MSG_OUT_STOCK);
    });
  }

  onSelectorQuantityChange(): void {
    if (this.selectedAvailQuantity < this.selectedQuantity) {
      this.disableBtnState(true, MSG_INVALID_QTY);
      return;
    } 
    this.disableBtnState(false);
  }

  doAddToCart(): void {
    console.log('add to cart');
    return;
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