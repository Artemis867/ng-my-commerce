import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalModule, BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

import { ShoppingCartComponent } from './shopping-cart.component';

describe('ShoppingCartComponent', () => {
  let component: ShoppingCartComponent;
  let fixture: ComponentFixture<ShoppingCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartComponent ],
      imports: [],
      providers: [
        {
          provide: BsModalService,
          useValue: ''
        },
        {provide: BsModalRef}
      ],
    });

    fixture = TestBed.createComponent(ShoppingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
