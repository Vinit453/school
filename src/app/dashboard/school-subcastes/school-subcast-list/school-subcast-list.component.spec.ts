import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSubcastListComponent } from './school-subcast-list.component';

describe('SchoolSubcastListComponent', () => {
  let component: SchoolSubcastListComponent;
  let fixture: ComponentFixture<SchoolSubcastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSubcastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSubcastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
