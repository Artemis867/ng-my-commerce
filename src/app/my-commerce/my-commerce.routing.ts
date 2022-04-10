import { Routes, RouterModule } from "@angular/router";

// Components
import { MainContentComponent } from "./main-content/main-content.component";
import { ProductsComponent } from "./products/products.component";
import { PersonComponent } from "./widgets/person/person.component";
import { ProductDetailsComponent } from "./widgets/product-details/product-details.component";
import { ProductListComponent } from "./widgets/product-list/product-list.component";



const MAIN_ROUTES: Routes = [
    {
        path: '', redirectTo: '/shop/list',
        pathMatch: 'full'
    },
    {
        path: 'shop', component: ProductsComponent,
        children: [
            {path: 'list', component: ProductListComponent},
            {path: 'details/:id', component: ProductDetailsComponent},
            {path: 'person', component: PersonComponent}
        ]
    }
];


export const myCommerceRouting = RouterModule.forRoot(MAIN_ROUTES, { relativeLinkResolution: 'legacy' });