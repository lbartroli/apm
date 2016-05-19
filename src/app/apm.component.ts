import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {ROUTER_PROVIDERS, Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {ProductService} from './+products/services/product.service';
import {ProductDetailComponent} from './+products/components/product-detail/product-detail.component';
import {HomeComponent} from './+home';
import {ProductsComponent} from './+products';

@Component({
  moduleId: module.id,
  selector: 'apm-app',
  templateUrl: 'apm.component.html',
  styleUrls: ['apm.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})
@Routes([
  {path: '/', component: HomeComponent},
  {path: '/home', component: HomeComponent},
  {path: '/products', component: ProductsComponent},
  {path: '/product/:id', component: ProductDetailComponent},
])
export class ApmAppComponent {
  title: string = 'Acme Product Management';
}
