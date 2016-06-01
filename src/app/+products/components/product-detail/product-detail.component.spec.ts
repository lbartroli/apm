import {beforeEach, beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {Http, ConnectionBackend, RequestOptions} from '@angular/http';
import {By} from '@angular/platform-browser';
import {ProductDetailComponent} from './product-detail.component';
import {ProductService} from '../../services/product.service';

describe('Component: ProductDetail', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(
      () => [ProductDetailComponent, ProductService, Http, ConnectionBackend, RequestOptions]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([ProductDetailComponent], (component: ProductDetailComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(ProductDetailComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(ProductDetailComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-product-detail></app-product-detail>
  `,
  directives: [ProductDetailComponent]
})
class ProductDetailComponentTestController {
}
