import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelitionFormComponent } from './relition-form.component';

describe('RelitionFormComponent', () => {
  let component: RelitionFormComponent;
  let fixture: ComponentFixture<RelitionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelitionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelitionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
