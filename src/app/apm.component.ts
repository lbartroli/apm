import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {ProductService} from './+products/services/product.service';
import {NavbarComponent} from './navbar';

@Component({
  moduleId: module.id,
  selector: 'apm-app',
  templateUrl: 'apm.component.html',
  styleUrls: ['apm.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  providers: [ProductService, HTTP_PROVIDERS]
})
export class ApmAppComponent {
  constructor() {}
}
