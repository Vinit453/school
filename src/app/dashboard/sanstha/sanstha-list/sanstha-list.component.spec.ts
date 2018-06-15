import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SansthaListComponent } from './sanstha-list.component';

describe('SansthaListComponent', () => {
  let component: SansthaListComponent;
  let fixture: ComponentFixture<SansthaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SansthaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SansthaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
