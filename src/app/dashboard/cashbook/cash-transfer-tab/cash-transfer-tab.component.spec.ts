import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashTransferTabComponent } from './cash-transfer-tab.component';

describe('CashTransferTabComponent', () => {
  let component: CashTransferTabComponent;
  let fixture: ComponentFixture<CashTransferTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashTransferTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashTransferTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
