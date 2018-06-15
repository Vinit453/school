import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSectionFormComponent } from './school-section-form.component';

describe('SchoolSectionFormComponent', () => {
  let component: SchoolSectionFormComponent;
  let fixture: ComponentFixture<SchoolSectionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSectionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
