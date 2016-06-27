import { RouterConfig } from '@angular/router';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductsComponent} from './products.component';

export const ProductsRoutes: RouterConfig = [
  {path: 'products', component: ProductsComponent},
  {path: 'product/:id', component: ProductDetailComponent},
];