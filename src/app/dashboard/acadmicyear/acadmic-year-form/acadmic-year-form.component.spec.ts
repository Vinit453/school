import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmicYearFormComponent } from './acadmic-year-form.component';

describe('AcadmicYearFormComponent', () => {
  let component: AcadmicYearFormComponent;
  let fixture: ComponentFixture<AcadmicYearFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadmicYearFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmicYearFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
