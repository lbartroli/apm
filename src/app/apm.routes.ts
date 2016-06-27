import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from './+home';
import {ProductsRoutes} from './+products/products.routes';

export const routes: RouterConfig = [
  ...ProductsRoutes,
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];