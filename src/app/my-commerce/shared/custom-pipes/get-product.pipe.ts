import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, mergeMap, tap } from 'rxjs/operators';
import * as ProductActions from '../../state/actions/product.actions';

@Pipe({
  name: 'getProduct'
})
export class GetProductPipe implements PipeTransform {

  constructor(
    private store: Store<any>
  ) {}
  transform(value: any, args?: any): any {
    return value;
  }

}
