import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from './+home';
import {ProductsRoutes} from './+products/products.routes';
import {AdminComponent} from './+admin/admin.component';
import {AuthGuard} from './auth/auth.guard';
import { LoginRoutes, AUTH_PROVIDERS } from './+admin/login/login.routes';
import { CanDeactivateGuard } from './+products/interfaces/component-deactivate.interface';

export const routes: RouterConfig = [
  ...ProductsRoutes,
  ...LoginRoutes,
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
  AUTH_PROVIDERS,
  CanDeactivateGuard
];