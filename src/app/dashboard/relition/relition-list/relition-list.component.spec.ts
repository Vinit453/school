import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelitionListComponent } from './relition-list.component';

describe('RelitionListComponent', () => {
  let component: RelitionListComponent;
  let fixture: ComponentFixture<RelitionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelitionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
