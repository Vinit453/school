import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookCrudTabComponent } from './cashbook-crud-tab.component';

describe('CashbookCrudTabComponent', () => {
  let component: CashbookCrudTabComponent;
  let fixture: ComponentFixture<CashbookCrudTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbookCrudTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbookCrudTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
