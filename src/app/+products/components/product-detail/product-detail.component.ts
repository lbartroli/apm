import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Product} from '../../interfaces/product.interface';
import {StarComponent} from '../shared/star/star.component';
import {ProductService} from '../../services/product.service';

@Component({
  moduleId: module.id,
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css'],
  directives: [StarComponent]
})
export class ProductDetailComponent {
  pageTitle: string = 'Product details';
  product: Product;
  errorMessage: string;
  private sub: any;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
  this.sub = this.route.params.subscribe(params => {
     let id = +params['id']; // (+) converts string 'id' to a number
     this.getProduct(id);
   });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getProduct(id: number) {
    this.productService.getProduct(id).subscribe(
        product => this.product = product, error => this.errorMessage = <any>error);
  }

  onBack(): void { this.router.navigate(['/products']); }
}
