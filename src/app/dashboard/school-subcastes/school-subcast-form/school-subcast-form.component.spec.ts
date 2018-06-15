import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSubcastFormComponent } from './school-subcast-form.component';

describe('SchoolSubcastFormComponent', () => {
  let component: SchoolSubcastFormComponent;
  let fixture: ComponentFixture<SchoolSubcastFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSubcastFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSubcastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
