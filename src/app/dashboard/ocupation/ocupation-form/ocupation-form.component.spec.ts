import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationFormComponent } from './ocupation-form.component';

describe('OcupationFormComponent', () => {
  let component: OcupationFormComponent;
  let fixture: ComponentFixture<OcupationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
