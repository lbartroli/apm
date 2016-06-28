import { RouterConfig } from '@angular/router';
import {ProductsComponent} from './products.component';
import {ProductDetailComponent} from './components/product-detail/product-detail.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {AdminComponent} from '../+admin/admin.component';
import {AuthGuard} from '../auth/auth.guard';
import {CanDeactivateGuard} from './interfaces/component-deactivate.interface';

export const ProductsRoutes: RouterConfig = [
  {
    path: '',
    redirectTo: '/home',
    terminal: true
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
      {
        path: ':id',
        component: ProductDetailComponent,
        canDeactivate: [CanDeactivateGuard]
      },
      {
        path: '',
        component: ProductListComponent
      },
    ]
  }
];