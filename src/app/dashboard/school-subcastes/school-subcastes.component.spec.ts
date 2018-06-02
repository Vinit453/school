import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSubcastesComponent } from './school-subcastes.component';

describe('SchoolSubcastesComponent', () => {
  let component: SchoolSubcastesComponent;
  let fixture: ComponentFixture<SchoolSubcastesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSubcastesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSubcastesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
