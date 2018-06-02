import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcastComponent } from './subcast.component';

describe('SubcastComponent', () => {
  let component: SubcastComponent;
  let fixture: ComponentFixture<SubcastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
