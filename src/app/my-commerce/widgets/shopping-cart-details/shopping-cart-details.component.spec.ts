import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartDetailsComponent } from './shopping-cart-details.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, StoreModule } from '@ngrx/store';
import { of } from 'rxjs';
import { OverlayComponent } from '../shopping-cart-list/overlay/overlay.component';

class StoreMock {
  dispatch = jest.fn();
  select = jest.fn().mockReturnValue(of([]));
}

describe('ShoppingCartDetailsComponent', () => {
  let component: ShoppingCartDetailsComponent;
  let fixture: ComponentFixture<ShoppingCartDetailsComponent>;
  let store: MockStore<{}>;
  const initialState = {
    productId: 1234334244,
    productName: 'Mock Product',
    sizes: {
      S: 1,
      M: 1,
      L: 1
    },
    description: 'test description'
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartDetailsComponent, OverlayComponent ],
      providers: [
        {
          provide: Store,
          useClass: StoreMock
        },
        {
          provide: provideMockStore,
          useValue: initialState
        }
      ]
    });

    fixture = TestBed.createComponent(ShoppingCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
