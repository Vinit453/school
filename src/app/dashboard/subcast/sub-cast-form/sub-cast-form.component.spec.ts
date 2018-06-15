import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCastFormComponent } from './sub-cast-form.component';

describe('SubCastFormComponent', () => {
  let component: SubCastFormComponent;
  let fixture: ComponentFixture<SubCastFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCastFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCastFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
