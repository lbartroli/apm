import {Component, OnChanges, Input, Output, EventEmitter} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-star',
  templateUrl: 'star.component.html',
  styleUrls: ['star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  ratingWidth: number;

  ngOnChanges(): void { this.ratingWidth = this.rating * 86 / 5; }

  onClick(e) {
    this.ratingWidth = e.clientX - e.target.getBoundingClientRect().left;

    this.ratingWidth = this.ratingWidth < 86 ? this.ratingWidth : 86;
  }
}
