import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { GET_PRODUCTS } from '../../query/graphql';
import { ProductListService } from './services/product-list.service';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';


describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let service: ProductListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductListComponent ],
      imports: [
        ApolloModule,
        HttpClientModule,
      ],
      providers: [
        { provide: ProductListService },
        {
          provide: APOLLO_OPTIONS,
          useFactory: (httpLink: HttpLink) => {
            return {
              cache: new InMemoryCache(),
              link: httpLink.create({
                uri: `http://localhost:4000/graphql`,
              }),
            }
          },
          deps: [HttpLink],
        }
      ]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
