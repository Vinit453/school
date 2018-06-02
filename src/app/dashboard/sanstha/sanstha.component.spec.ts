import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SansthaComponent } from './sanstha.component';

describe('SansthaComponent', () => {
  let component: SansthaComponent;
  let fixture: ComponentFixture<SansthaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SansthaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SansthaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
