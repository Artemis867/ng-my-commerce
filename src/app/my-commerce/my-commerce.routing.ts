import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./widgets/product-details/product-details.component";
import { ProductListComponent } from "./widgets/product-list/product-list.component";



const MAIN_ROUTES: Routes = [
  {
    path: '', redirectTo: '/shop/list',
    pathMatch: 'full'
  },
  {
    path: 'shop',
    component: ProductsComponent,
    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'details/:id',
        component: ProductDetailsComponent
      },
    ]
  }
];


export const myCommerceRouting = RouterModule.forRoot(MAIN_ROUTES, { relativeLinkResolution: 'legacy' });