import {TestBed} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {of} from 'rxjs';
import {FinanceOutputComponent} from './finance-output.component';
import {FinanceService} from "../../services/finance.service";

describe('FinanceOutputComponent', () => {
  let component: FinanceOutputComponent;
  let financeService: FinanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [
        FinanceOutputComponent,
        {
          provide: FinanceService,
          useValue: {
            financeModel$: of({inputNumber: '10', outputNumber: 100}),
          },
        },
      ],
    });

    component = TestBed.inject(FinanceOutputComponent);
    financeService = TestBed.inject(FinanceService);
  });

  // Test if component instance is created
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test if financeModel$ observable from service is assigned
  it('should assign financeModel$ observable from service', () => {
    component.financeModel$.subscribe((model) => {
      expect(model).toEqual({inputNumber: '10', outputNumber: 100});
    });
  });
});
