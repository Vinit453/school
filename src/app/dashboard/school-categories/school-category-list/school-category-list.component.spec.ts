import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCategoryListComponent } from './school-category-list.component';

describe('SchoolCategoryListComponent', () => {
  let component: SchoolCategoryListComponent;
  let fixture: ComponentFixture<SchoolCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
