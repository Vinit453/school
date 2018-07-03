import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateTabComponent } from './state-tab.component';

describe('StateTabComponent', () => {
  let component: StateTabComponent;
  let fixture: ComponentFixture<StateTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
