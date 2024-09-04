import {CanActivateFn, Router} from '@angular/router';
import {FinanceService} from "../services/finance.service";
import {inject} from "@angular/core";

export const inputGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const store = inject(FinanceService);
  if (store.getFinanceModel()?.outputNumber) {
    return true;
  } else {
    router.navigate(['/financial-number/number-input']);
    //show system alert here
    return false;
  }
};
