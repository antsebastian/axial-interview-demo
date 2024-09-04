import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'finance'
  },
  {
    path: 'finance',
    loadChildren: () =>
      import('./finance/finance.routes').then(m => m.FINANCE_ROUTES),
  }
];
