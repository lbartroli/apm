import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {IProduct} from '../interfaces/product.interface';

@Injectable()
export class ProductService {
  private productUrl = 'app/api/products.json';

  constructor(private http: Http) {}

  getProducts(): Observable<IProduct[]> {
    return this.http.get(this.productUrl)
        .map((response: Response) => <IProduct[]>response.json())
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts().map((products: IProduct[]) => products.find(p => p.productId === id));
  }

  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
