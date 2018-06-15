import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSectionListComponent } from './school-section-list.component';

describe('SchoolSectionListComponent', () => {
  let component: SchoolSectionListComponent;
  let fixture: ComponentFixture<SchoolSectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
