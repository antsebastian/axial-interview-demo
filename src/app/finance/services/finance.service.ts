import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {IFinanceModel} from "../data-model/finance-model";


@Injectable({
  providedIn: 'root'
})
export class FinanceService {
  private _financeModel = new BehaviorSubject<IFinanceModel | null>(null);
  financeModel$ = this._financeModel.asObservable();

  constructor() {
  }

  setFinanceModel(model: IFinanceModel) {
    this._financeModel.next({...model});
  }

  getFinanceModel(): IFinanceModel | null {
    return {...this._financeModel.value};
  }

}
