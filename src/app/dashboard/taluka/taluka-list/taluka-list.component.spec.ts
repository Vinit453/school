import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalukaListComponent } from './taluka-list.component';

describe('TalukaListComponent', () => {
  let component: TalukaListComponent;
  let fixture: ComponentFixture<TalukaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalukaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalukaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
