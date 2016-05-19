import {Pipe, PipeTransform} from '@angular/core';
import {Product} from '../interfaces/product.interface';

@Pipe({name: 'productFilter'})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filter: string): Product[] {
    filter = filter ? filter.toLocaleLowerCase() : null;

    return filter ?
        value.filter(
            (product: Product) => product.productName.toLocaleLowerCase().indexOf(filter) !== -1) :
        value;
  }
}
