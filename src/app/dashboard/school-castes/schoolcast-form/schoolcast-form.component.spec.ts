import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcastFormComponent } from './schoolcast-form.component';

describe('SchoolcastFormComponent', () => {
  let component: SchoolcastFormComponent;
  let fixture: ComponentFixture<SchoolcastFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolcastFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
