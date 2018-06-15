import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcastListComponent } from './schoolcast-list.component';

describe('SchoolcastListComponent', () => {
  let component: SchoolcastListComponent;
  let fixture: ComponentFixture<SchoolcastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolcastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
