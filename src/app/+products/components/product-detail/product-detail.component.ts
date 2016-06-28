import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Product} from '../../interfaces/product.interface';
import {StarComponent} from '../shared/star/star.component';
import {ProductService} from '../../services/product.service';
import { AuthService } from '../../../auth/auth.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import { DialogService } from '../../../shared/dialog.service';

@Component({
  moduleId: module.id,
  templateUrl: 'product-detail.component.html',
  styleUrls: ['product-detail.component.css'],
  directives: [StarComponent]
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  pageTitle: string = 'Product details';
  product: Product;
  errorMessage: string;
  private sub: any;
  editMode: boolean = false;
  editName: string;
  editCode: string;
  editDescription: string;
  editReleaseDate: string;
  editAvailability: string;
  editPrice: number;
  editStarRating: number;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute, public authService: AuthService, private dialogService: DialogService) {}

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

  editProduct(): void { this.editMode = true; }

  cancelEdit(): void {
    this.onBack();
  }

  saveEdit() {

  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.editMode) {
      return true;
    }

    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
    if (this.checkChanges()) {
      return true;
    }

    // Otherwise ask the user with the dialog service and return its
    // promise which resolves to true or false when the user decides
    let p = this.dialogService.confirm('Discard changes?'),
        o = Observable.fromPromise(p);

    return o;
  }

  checkChanges(): boolean {
    return !this.product ||
      this.product.productName === this.editName ||
      this.product.productCode === this.editCode ||
      this.product.description === this.editDescription ||
      this.product.releaseDate === this.editReleaseDate ||
      this.product.price === this.editPrice ||
      this.product.starRating === this.editStarRating
  }
}
