import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../interfaces/product.interface';
import {ProductFilterPipe} from '../../pipes/product-filter.pipe';
import {StarComponent} from '../shared/star/star.component';
import {ProductService} from '../../services/product.service';

@Component({
  moduleId: module.id,
  selector: 'app-product-list',
  templateUrl: 'product-list.component.html',
  styleUrls: ['product-list.component.css'],
  pipes: [ProductFilterPipe],
  directives: [StarComponent]
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string;
  errorMessage: string;
  products: Product[];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => this.products = products, error => this.errorMessage = <any>error);

    this.showImage = JSON.parse(localStorage.getItem('showImages'));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;

    localStorage.setItem('showImages', JSON.stringify(this.showImage));
  }

  onSelect(product: Product) {
    this.router.navigate(['/products', product.productId]);
  }
}
