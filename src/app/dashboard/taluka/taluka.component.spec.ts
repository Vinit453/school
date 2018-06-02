import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukaComponent } from './taluka.component';

describe('TalukaComponent', () => {
  let component: TalukaComponent;
  let fixture: ComponentFixture<TalukaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
