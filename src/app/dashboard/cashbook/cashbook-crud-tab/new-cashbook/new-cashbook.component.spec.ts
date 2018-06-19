import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCashbookComponent } from './new-cashbook.component';

describe('NewCashbookComponent', () => {
  let component: NewCashbookComponent;
  let fixture: ComponentFixture<NewCashbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCashbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
