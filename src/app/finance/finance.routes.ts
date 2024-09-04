import {Routes} from "@angular/router";
import {FinanceInputComponent} from "./components/finance-input/finance-input.component";
import {FinanceOutputComponent} from "./components/finance-output/finance-output.component";
import {inputGuard} from "./guards/input.guard";

export const FINANCE_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'finance-input'
  },
  {
    path: 'finance-input',
    component: FinanceInputComponent
  },
  {
    path: 'finance-output',
    component: FinanceOutputComponent,
    canActivate: [inputGuard],
  },
  {path: '**', component: FinanceInputComponent}
];
