import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ApmAppComponent, environment} from './app/';
import {APP_ROUTER_PROVIDERS} from './app/apm.routes';
import {AuthGuard} from './app/auth/auth.guard';
import {AuthService} from './app/auth/auth.service';
import {DialogService} from './app/shared/dialog.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(ApmAppComponent, [
  APP_ROUTER_PROVIDERS,
  AuthGuard,
  AuthService,
  DialogService
])
.catch(err => console.error(err));  ;
