import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {FinanceService} from "../../services/finance.service";
import {Observable} from "rxjs";
import {IFinanceModel} from "../../data-model/finance-model";
import {AsyncPipe, DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-finance-output',
  standalone: true,
  imports: [
    FormsModule,
    AsyncPipe,
    DecimalPipe
  ],
  templateUrl: './finance-output.component.html',
  styleUrl: './finance-output.component.scss'
})
export class FinanceOutputComponent {
  financeModel$!: Observable<IFinanceModel | null>;

  constructor(private store: FinanceService) {
    this.financeModel$ = store.financeModel$;
  }

}
