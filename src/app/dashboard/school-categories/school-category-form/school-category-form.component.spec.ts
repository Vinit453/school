import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCategoryFormComponent } from './school-category-form.component';

describe('SchoolCategoryFormComponent', () => {
  let component: SchoolCategoryFormComponent;
  let fixture: ComponentFixture<SchoolCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
