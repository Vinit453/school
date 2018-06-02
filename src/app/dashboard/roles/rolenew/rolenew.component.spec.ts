import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RolenewComponent } from './rolenew.component';

describe('RolenewComponent', () => {
  let component: RolenewComponent;
  let fixture: ComponentFixture<RolenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RolenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
