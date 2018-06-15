import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCastListComponent } from './sub-cast-list.component';

describe('SubCastListComponent', () => {
  let component: SubCastListComponent;
  let fixture: ComponentFixture<SubCastListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCastListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCastListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
