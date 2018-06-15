import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolReligionFormComponent } from './school-religion-form.component';

describe('SchoolReligionFormComponent', () => {
  let component: SchoolReligionFormComponent;
  let fixture: ComponentFixture<SchoolReligionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolReligionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolReligionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
