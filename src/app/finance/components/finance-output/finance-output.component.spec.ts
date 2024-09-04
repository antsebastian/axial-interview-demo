import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FinanceOutputComponent} from './finance-output.component';

describe('NumberOutputComponent', () => {
  let component: FinanceOutputComponent;
  let fixture: ComponentFixture<FinanceOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinanceOutputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FinanceOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
