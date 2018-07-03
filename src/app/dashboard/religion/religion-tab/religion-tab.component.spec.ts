import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligionTabComponent } from './religion-tab.component';

describe('ReligionTabComponent', () => {
  let component: ReligionTabComponent;
  let fixture: ComponentFixture<ReligionTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReligionTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReligionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
