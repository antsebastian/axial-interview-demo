import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {IFinanceModel} from "../data-model/finance-model";

export class FinanceUtils {

  static parseInputNumber(inputNumber: string | undefined): IFinanceModel {
    let outputNumber: number | undefined = undefined;
    if (inputNumber) {
      try {
        const num = parseFloat(inputNumber);
        const unit = inputNumber.replace(/[^a-zA-Z]/g, '').toUpperCase();

        switch (unit) {
          case 'K':
            outputNumber = num * 1000;
            break;
          case 'M':
            outputNumber = num * 1000000;
            break;
          case 'B':
            outputNumber = num * 1000000000;
            break;
          case 'T':
            outputNumber = num * 1000000000000;
            break;
          default:
            outputNumber = num;
            break;
        }
      } catch (ex) {
        outputNumber = undefined;
        console.error(ex);
      }
    }
    return {inputNumber, outputNumber};
  }

  static humanNumberValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const val = control.value;
      return FinanceUtils.parseInputNumber(val).outputNumber ? null : {format: {value: control.value}};
    };
  }
}
