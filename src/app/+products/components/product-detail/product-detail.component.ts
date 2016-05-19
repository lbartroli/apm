import {Component} from '@angular/core';
import {Router, OnActivate, RouteSegment} from '@angular/router';
import {Product} from '../../interfaces/product.interface';
import {StarComponent} from '../shared/star/star.component';
import {ProductService} from '../../services/product.service';

@Component({
  moduleId: module.id,
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css'],
  directives: [StarComponent]
})
export class ProductDetailComponent implements OnActivate {
  pageTitle: string = 'Product details';
  product: Product;
  errorMessage: string;

  constructor(private productService: ProductService, private router: Router) {}

  routerOnActivate(curr: RouteSegment): void {
    let id = +curr.getParam('id');
    this.getProduct(id);
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
        product => this.product = product, error => this.errorMessage = <any>error);
  }

  onBack(): void { this.router.navigate(['/products']); }
}
