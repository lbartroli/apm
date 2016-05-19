import {beforeEach, beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {ComponentFixture, TestComponentBuilder} from '@angular/compiler/testing';
import {Component} from '@angular/core';
import {By} from '@angular/platform-browser';
import {StarComponent} from './star.component';

describe('Component: Star', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [StarComponent]);
  beforeEach(
      inject([TestComponentBuilder], function(tcb: TestComponentBuilder) { builder = tcb; }));

  it('should inject the component',
     inject([StarComponent], (component: StarComponent) => { expect(component).toBeTruthy(); }));

  it('should create the component', inject([], () => {
       return builder.createAsync(StarComponentTestController)
           .then((fixture: ComponentFixture<any>) => {
             let query = fixture.debugElement.query(By.directive(StarComponent));
             expect(query).toBeTruthy();
             expect(query.componentInstance).toBeTruthy();
           });
     }));
});

@Component({
  selector: 'test',
  template: `
    <app-star></app-star>
  `,
  directives: [StarComponent]
})
class StarComponentTestController {
}
