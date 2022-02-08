import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCommerceComponent } from './my-commerce.component';
import { ProductListComponent } from './widgets/product-list/product-list.component';
import { SidebarPanelComponent } from './widgets/sidebar-panel/sidebar-panel.component';
import { SidebarSelectorComponent } from './widgets/sidebar-selector/sidebar-selector.component';
import { MainContentComponent } from './main-content/main-content.component';
import { HeaderComponent } from './header/header.component';
import { ProductDetailsComponent } from './widgets/product-details/product-details.component';
import { myCommerceRouting } from './my-commerce.routing';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ToArrayPipe } from './shared/custom-pipes/to-array.pipe';
import { StoreModule } from '@ngrx/store';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ShoppingCartComponent } from './widgets/shopping-cart/shopping-cart.component';
import { ShoppingCartListComponent } from './widgets/shopping-cart-list/shopping-cart-list.component';
import { ProductReducer } from './state/reducers/product.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './state/effects/product.effects';
import { GetProductPipe } from './shared/custom-pipes/get-product.pipe';
import { ShoppingCartDetailsComponent } from './widgets/shopping-cart-details/shopping-cart-details.component';
import { PersonComponent } from './widgets/person/person.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyCommerceComponent,
    ProductListComponent,
    SidebarPanelComponent,
    SidebarSelectorComponent,
    MainContentComponent,
    HeaderComponent,
    ProductDetailsComponent,
    ProductsComponent,
    ToArrayPipe,
    ShoppingCartComponent,
    ShoppingCartListComponent,
    GetProductPipe,
    ShoppingCartDetailsComponent,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    myCommerceRouting,
    StoreModule.forRoot({
      product: ProductReducer
    }),
    EffectsModule.forRoot([ProductEffects]),
    NgbModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    MyCommerceComponent
  ]
})
export class MyCommerceModule { }
