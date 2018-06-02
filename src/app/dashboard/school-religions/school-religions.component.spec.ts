import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolReligionsComponent } from './school-religions.component';

describe('SchoolReligionsComponent', () => {
  let component: SchoolReligionsComponent;
  let fixture: ComponentFixture<SchoolReligionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolReligionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolReligionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
