import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcadmicyearComponent } from './acadmicyear.component';

describe('AcadmicyearComponent', () => {
  let component: AcadmicyearComponent;
  let fixture: ComponentFixture<AcadmicyearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcadmicyearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcadmicyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
