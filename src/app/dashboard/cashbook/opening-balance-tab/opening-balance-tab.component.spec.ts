import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningBalanceTabComponent } from './opening-balance-tab.component';

describe('OpeningBalanceTabComponent', () => {
  let component: OpeningBalanceTabComponent;
  let fixture: ComponentFixture<OpeningBalanceTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpeningBalanceTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpeningBalanceTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
