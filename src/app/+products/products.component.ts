import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ProductService} from './services/product.service';

@Component({
  moduleId: module.id,
  templateUrl: 'products.component.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ProductService]
})
export class ProductsComponent {}
