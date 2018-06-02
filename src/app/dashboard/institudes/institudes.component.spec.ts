import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitudesComponent } from './institudes.component';

describe('InstitudesComponent', () => {
  let component: InstitudesComponent;
  let fixture: ComponentFixture<InstitudesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitudesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstitudesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
