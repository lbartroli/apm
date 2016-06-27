import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {ApmAppComponent, environment} from './app/';
import { APP_ROUTER_PROVIDERS } from './app/apm.routes';

if (environment.production) {
  enableProdMode();
}

bootstrap(ApmAppComponent, [
  APP_ROUTER_PROVIDERS
])
.catch(err => console.error(err));  ;
