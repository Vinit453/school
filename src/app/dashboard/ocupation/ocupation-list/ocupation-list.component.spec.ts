import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OcupationListComponent } from './ocupation-list.component';

describe('OcupationListComponent', () => {
  let component: OcupationListComponent;
  let fixture: ComponentFixture<OcupationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OcupationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
