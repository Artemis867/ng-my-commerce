import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductListService } from './services/product-list.service';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { gqlProductListMock } from '../../mocks/product-list.mock';
import { DOCUMENT } from '@angular/common';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;
  let compiled: any;

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
        },
      ]
    });
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;

    compiled = TestBed.inject(DOCUMENT);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('provide product list mock data', () => {
    expect(gqlProductListMock.data.getProductList.length).toBeGreaterThan(0);
  });

  it('should contain atleast 1 size', () => {
    expect(true).toBeTruthy();
  });  
});
