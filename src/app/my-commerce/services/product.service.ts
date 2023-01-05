import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { GET_SNEAKER_LIST } from '../query/graphql';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private apollo: Apollo,
    private http: HttpClient,
  ) { }


  getSneakerList(): any {
    return this.http.get('http://localhost:3000/all');
  }
}
