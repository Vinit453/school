import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukaFormComponent } from './taluka-form.component';

describe('TalukaFormComponent', () => {
  let component: TalukaFormComponent;
  let fixture: ComponentFixture<TalukaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
