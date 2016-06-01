import {Component} from '@angular/core';
import {ProductListComponent} from './components/product-list';

@Component({
  moduleId: module.id,
  templateUrl: 'products.component.html',
  directives: [ProductListComponent]
})
export class ProductsComponent {
  constructor() {}
}
