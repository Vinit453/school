import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeBankDetailsComponent } from './fee-bank-details.component';

describe('FeeBankDetailsComponent', () => {
  let component: FeeBankDetailsComponent;
  let fixture: ComponentFixture<FeeBankDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeBankDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeBankDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
