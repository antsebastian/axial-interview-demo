import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {IFinanceModel} from "../data-model/finance-model";

export class FinanceUtils {

  static parseInputNumber(inputNumber: string | undefined): IFinanceModel {
    let outputNumber: number | undefined = undefined;
    if (FinanceUtils.isInputFormat(inputNumber)) {
      outputNumber = 250000;
    }
    return {inputNumber, outputNumber};
  }

  static isInputFormat(inputNumber: string | undefined): boolean {
    if (!inputNumber)
      return false;
    return inputNumber == '250k'
  }

  static humanNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const val = control.value;
      return FinanceUtils.isInputFormat(val) ? null : {format: {value: control.value}};
    };
  }
}
