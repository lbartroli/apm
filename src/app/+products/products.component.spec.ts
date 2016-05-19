import {beforeEach, beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {ProductsComponent} from './products.component';

describe('Component: Products', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [ProductsComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component', inject([ProductsComponent], (component: ProductsComponent) => {
       expect(component).toBeTruthy();
     }));

  it('should create the component', inject([], () => {
       return builder.createAsync(ProductsComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(ProductsComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-products></app-products>
  `,
  directives: [ProductsComponent]
})
class ProductsComponentTestController {
}
