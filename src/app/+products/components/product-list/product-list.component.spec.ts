import {beforeEach, beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ProductListComponent} from './product-list.component';
import {ProductService} from '../../services/product.service';
import {Http, ConnectionBackend, HTTP_PROVIDERS} from '@angular/http';

describe('Component: ProductList', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(
      () => [ProductListComponent, ProductService, HTTP_PROVIDERS, Http, ConnectionBackend]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([ProductListComponent], (component: ProductListComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(ProductListComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(ProductListComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-product-list></app-product-list>
  `,
  directives: [ProductListComponent]
})
class ProductListComponentTestController {
}