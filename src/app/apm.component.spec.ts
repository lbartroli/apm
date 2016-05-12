import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ApmAppComponent } from '../app/apm.component';

beforeEachProviders(() => [ApmAppComponent]);

describe('App: Apm', () => {
  it('should create the app',
      inject([ApmAppComponent], (app: ApmAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'apm works!\'',
      inject([ApmAppComponent], (app: ApmAppComponent) => {
    expect(app.title).toEqual('apm works!');
  }));
});
