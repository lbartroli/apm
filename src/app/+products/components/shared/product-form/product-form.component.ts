import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm }    from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  moduleId: module.id,
  selector: 'app-product-form',
  templateUrl: 'product-form.component.html',
  styleUrls: ['product-form.component.css']
})
export class ProductFormComponent {
  @Input() product: Product;
  @Output() onDiscardChanges = new EventEmitter();
  submitted = false;
  editName: string;
  editCode: string;
  editDescription: string;
  editReleaseDate: string;
  editAvailability: string;
  editPrice: number;
  editStarRating: number;

  ngOnInit() {
    this.editName = '' || this.product.productName;
    this.editCode = '' || this.product.productCode;
    this.editDescription = '' || this.product.description;
    this.editReleaseDate = '' || this.product.releaseDate;
    this.editPrice = 0 || this.product.price;
    this.editStarRating = 0 || this.product.starRating;
  }

  onSubmit() {
    this.submitted = true;
  }

  checkChanges(): boolean {
    return !!this.product &&
      this.product.productName === this.editName &&
      this.product.productCode === this.editCode &&
      this.product.description === this.editDescription &&
      this.product.releaseDate === this.editReleaseDate &&
      this.product.price === this.editPrice &&
      this.product.starRating === this.editStarRating;
  }

  cancelEdit() {
    this.onDiscardChanges.emit(true);
  }
}
