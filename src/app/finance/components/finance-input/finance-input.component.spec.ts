import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FinanceInputComponent} from './finance-input.component';

describe('NumberInputComponent', () => {
  let component: FinanceInputComponent;
  let fixture: ComponentFixture<FinanceInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceInputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FinanceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
