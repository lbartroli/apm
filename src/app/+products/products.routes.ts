import { RouterConfig } from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductListComponent} from './components/product-list/product-list.component';

export const ProductsRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/products',
    terminal: true
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      { path: ':id', component: ProductDetailComponent },
      { path: '', component: ProductListComponent },
    ]
  }
];