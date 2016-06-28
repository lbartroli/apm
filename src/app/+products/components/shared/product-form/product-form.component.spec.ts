/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { ProductFormComponent } from './product-form.component';

describe('Component: ProductForm', () => {
  it('should create an instance', () => {
    let component = new ProductFormComponent();
    expect(component).toBeTruthy();
  });
});
