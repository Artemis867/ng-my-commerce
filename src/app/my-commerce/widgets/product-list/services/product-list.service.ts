import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductDetails } from '../../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor(
    private http: HttpClient
  ) { }

  headers = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});

  getProducts(): Observable<ProductDetails[]> {
    return this.http.get<ProductDetails[]>(`http://localhost:3000/products/all`);
  }
  
}
