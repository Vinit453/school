import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolReligionListComponent } from './school-religion-list.component';

describe('SchoolReligionListComponent', () => {
  let component: SchoolReligionListComponent;
  let fixture: ComponentFixture<SchoolReligionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolReligionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolReligionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
