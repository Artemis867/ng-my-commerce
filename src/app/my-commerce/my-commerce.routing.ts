import { Routes, RouterModule } from "@angular/router";
import { SneakerDetailsComponent } from "./merch/sneakers/sneaker-details/sneaker-details.component";
import { SneakerListComponent } from "./merch/sneakers/sneaker-list/sneaker-list.component";
import { SneakersComponent } from "./merch/sneakers/sneakers.component";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./widgets/product-details/product-details.component";
import { ProductListComponent } from "./widgets/product-list/product-list.component";

const MAIN_ROUTES: Routes = [
  {
    path: '', redirectTo: '/sneaker/list',
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
  },
  {
    path: 'sneaker',
    component: SneakersComponent,
    children: [
      {
        path: 'list',
        component: SneakerListComponent
      },
      {
        path: 'details/:id',
        component: SneakerDetailsComponent
      }
    ]
  }
];

export const myCommerceRouting = RouterModule.forRoot(MAIN_ROUTES, { relativeLinkResolution: 'legacy' });