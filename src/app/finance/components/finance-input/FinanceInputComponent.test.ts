import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {FinanceInputComponent} from "./finance-input.component";
import {FinanceService} from "../../services/finance.service";

describe('FinanceInputComponent', () => {
  let component: FinanceInputComponent;
  let fixture: ComponentFixture<FinanceInputComponent>;
  let router: Router;
  let financeService: FinanceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinanceInputComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [FinanceService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceInputComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    financeService = TestBed.inject(FinanceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create input form on ngOnInit', () => {
    component.ngOnInit();
    expect(component.inputForm).toBeTruthy();
  });

  it('should set model data if available in store on ngOnInit', () => {
    spyOn(financeService, 'getFinanceModel' as never).and.returnValue({inputNumber: '1000'});
    component.ngOnInit();
    expect(component.inputForm.value).toEqual({inputNumber: '1000'});
  });

  it('should navigate to output page on form submit', () => {
    const navigateSpy = spyOn(router, 'navigate');
    const formValue = {inputNumber: '1000'};
    spyOn(financeService, 'setFinanceModel');
    component.onSubmitForm(formValue);
    expect(financeService.setFinanceModel).toHaveBeenCalledWith({inputNumber: 1000});
    expect(navigateSpy).toHaveBeenCalledWith(['/finance/finance-output']);
  });

});
