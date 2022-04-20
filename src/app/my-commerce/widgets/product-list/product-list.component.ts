import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
// import { takeUntil } from 'rxjs/operators';
import { ProductDetails } from '../interface/product.interface';
import { ProductListService } from './services/product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productList$: Observable<ProductDetails[]>;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private productListService: ProductListService,
  ) { }

  ngOnInit() {
    this.productList$ = this.productListService.getProducts();
    // this.productListService.simpleMethod();
  }

  /**
   * comment out if you need to use subscribe inside the component
   */
  // ngOnDestroy() {
  //   this.destroy$.next(true);
  //   this.destroy$.unsubscribe();
  // }


  /**
   * method use in case you need to use subscribe
   * inside the component
   */
  // getProductList(): Observable<ProductDetails[]> {
  //   return this.productListService.getProducts()
  //   .pipe(
  //     takeUntil(this.destroy$)
  //   );
  // }
}
