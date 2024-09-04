import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FinanceInputComponent} from './finance-input.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FinanceService} from "../../services/finance.service";
import {IFinanceModel} from "../../data-model/finance-model";
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {provideRouter, Router} from "@angular/router";

describe('FinanceInputComponent', () => {
  let component: FinanceInputComponent;
  let fixture: ComponentFixture<FinanceInputComponent>;
  let mockFinanceService: FinanceService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, NoopAnimationsModule],
      providers: [provideRouter([])]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FinanceInputComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    mockFinanceService = TestBed.inject(FinanceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize inputForm with FinanceModel from store', () => {
    const financeModel: IFinanceModel = {inputNumber: '1234'};
    spyOn(mockFinanceService, 'getFinanceModel' as never).and.returnValue(financeModel as never);
    component.ngOnInit();
    expect(component.inputForm.value).toEqual(financeModel);
  });

  it('should submit entered values and navigate to output page', () => {
    const navigateSpy = spyOn(router, 'navigate');
    let financeModel: IFinanceModel = {inputNumber: '1M'};
    component.inputForm.patchValue(financeModel);
    fixture.detectChanges();
    component.onSubmitForm(financeModel);
    expect(mockFinanceService.getFinanceModel()?.outputNumber).toEqual(1000000);
    expect(navigateSpy).toHaveBeenCalledOnceWith(['/finance/finance-output']);
  });
});
