import {TestBed} from '@angular/core/testing';
import {CanActivateFn} from '@angular/router';

import {inputGuard} from './input.guard';

describe('inputGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => inputGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
