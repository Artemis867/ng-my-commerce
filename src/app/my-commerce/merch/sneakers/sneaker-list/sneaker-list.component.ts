import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/my-commerce/services/product.service';

@Component({
  selector: 'app-sneaker-list',
  templateUrl: './sneaker-list.component.html',
  styleUrls: ['./sneaker-list.component.scss']
})
export class SneakerListComponent implements OnInit {

  sneakerList$: Observable<any>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.sneakerList$ = this.productService.getSneakerList();

    this.sneakerList$
    .subscribe(data => {
      console.log('sneaker list: ', data);
    });
  }
}
