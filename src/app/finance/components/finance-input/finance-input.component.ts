import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {FinanceService} from "../../services/finance.service";
import {FinanceUtils} from "../../utils/finance-utils";
import {IFinanceModel} from "../../data-model/finance-model";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-finance-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormField,
    MatError,
    MatLabel,
    MatInput,
    MatButton,
  ],
  templateUrl: './finance-input.component.html',
  styleUrl: './finance-input.component.scss'
})
export class FinanceInputComponent implements OnInit {
  inputForm!: FormGroup;

  constructor(private store: FinanceService, private router: Router) {
  }

  ngOnInit(): void {
    this.inputForm = new FormGroup({
      inputNumber: new FormControl<string | undefined>('',
        [Validators.required,
          FinanceUtils.humanNumberValidator()]),
    });

    const model = this.store.getFinanceModel();
    if (model) {
      this.inputForm.patchValue(model);
    }
  }

  onSubmitForm(value: IFinanceModel) {
    this.store.setFinanceModel(FinanceUtils.parseInputNumber(value.inputNumber));
    this.router.navigate(['/finance/finance-output']);
  }
}
