import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelitionComponent } from './relition.component';

describe('RelitionComponent', () => {
  let component: RelitionComponent;
  let fixture: ComponentFixture<RelitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
