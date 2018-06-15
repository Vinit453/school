import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SansthaFormComponent } from './sanstha-form.component';

describe('SansthaFormComponent', () => {
  let component: SansthaFormComponent;
  let fixture: ComponentFixture<SansthaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SansthaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SansthaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
