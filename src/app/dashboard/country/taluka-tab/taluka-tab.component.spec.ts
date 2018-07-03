import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukaTabComponent } from './taluka-tab.component';

describe('TalukaTabComponent', () => {
  let component: TalukaTabComponent;
  let fixture: ComponentFixture<TalukaTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukaTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukaTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
