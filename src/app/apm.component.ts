import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import 'rxjs/Rx';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {NavbarComponent} from './navbar';
import { DialogService }  from './shared/dialog.service';

@Component({
  moduleId: module.id,
  selector: 'apm-app',
  templateUrl: 'apm.component.html',
  styleUrls: ['apm.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent],
  providers: [HTTP_PROVIDERS]
})
export class ApmAppComponent {
  constructor() {}
}
