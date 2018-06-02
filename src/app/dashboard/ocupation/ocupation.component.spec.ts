import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationComponent } from './ocupation.component';

describe('OcupationComponent', () => {
  let component: OcupationComponent;
  let fixture: ComponentFixture<OcupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
