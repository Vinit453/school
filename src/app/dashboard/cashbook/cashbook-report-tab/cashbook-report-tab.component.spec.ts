import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookReportTabComponent } from './cashbook-report-tab.component';

describe('CashbookReportTabComponent', () => {
  let component: CashbookReportTabComponent;
  let fixture: ComponentFixture<CashbookReportTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbookReportTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbookReportTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
