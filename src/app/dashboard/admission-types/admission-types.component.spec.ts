import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionTypesComponent } from './admission-types.component';

describe('AdmissionTypesComponent', () => {
  let component: AdmissionTypesComponent;
  let fixture: ComponentFixture<AdmissionTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
