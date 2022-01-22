import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ProductDetails } from '../../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(
    private http: HttpClient
  ) { }

  getProductDetails(id: string): Observable<ProductDetails> {
    return this.http.get<ProductDetails>(`http://localhost:3000/products/${id}`);
  }
}