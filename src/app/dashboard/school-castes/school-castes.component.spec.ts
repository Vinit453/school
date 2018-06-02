import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolCastesComponent } from './school-castes.component';

describe('SchoolCastesComponent', () => {
  let component: SchoolCastesComponent;
  let fixture: ComponentFixture<SchoolCastesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolCastesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCastesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
