import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcasteTabComponent } from './subcaste-tab.component';

describe('SubcasteTabComponent', () => {
  let component: SubcasteTabComponent;
  let fixture: ComponentFixture<SubcasteTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcasteTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcasteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
