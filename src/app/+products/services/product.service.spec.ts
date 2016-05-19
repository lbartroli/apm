import {beforeEachProviders, it, describe, expect, inject} from '@angular/core/testing';
import {ProductService} from './product.service';
import {Http, HTTP_PROVIDERS} from '@angular/http';

describe('Product Service', () => {
  beforeEachProviders(() => [ProductService, Http, HTTP_PROVIDERS]);

  it('should ...',
     inject([ProductService], (service: ProductService) => { expect(service).toBeTruthy(); }));
});
