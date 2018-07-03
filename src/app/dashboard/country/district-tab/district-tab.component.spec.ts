import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictTabComponent } from './district-tab.component';

describe('DistrictTabComponent', () => {
  let component: DistrictTabComponent;
  let fixture: ComponentFixture<DistrictTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
