import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmicYearListComponent } from './acadmic-year-list.component';

describe('AcadmicYearListComponent', () => {
  let component: AcadmicYearListComponent;
  let fixture: ComponentFixture<AcadmicYearListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadmicYearListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmicYearListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
