import {it, describe, expect, inject, beforeEachProviders} from '@angular/core/testing';
import {IProduct} from '../interfaces/product.interface';
import {ProductFilterPipe} from './product-filter.pipe';

describe('ProductFilter Pipe', () => {
  beforeEachProviders(() => [ProductFilterPipe]);

  let products: IProduct[] = [{
    'productId': 1,
    'productName': 'Leaf Rake',
    'productCode': 'GDN-0011',
    'releaseDate': 'March 19, 2016',
    'description': 'Leaf rake with 48-inch wooden handle.',
    'price': 19.95,
    'starRating': 3.2,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
  }];

  it('should transform the input', inject([ProductFilterPipe], (pipe: ProductFilterPipe) => {
       expect(pipe.transform(products, 'leaf')[0].productId).toEqual(products[0].productId);
     }));
});
