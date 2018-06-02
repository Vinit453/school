import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolSectionsComponent } from './school-sections.component';

describe('SchoolSectionsComponent', () => {
  let component: SchoolSectionsComponent;
  let fixture: ComponentFixture<SchoolSectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolSectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
