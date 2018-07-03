import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasteTabComponent } from './caste-tab.component';

describe('CasteTabComponent', () => {
  let component: CasteTabComponent;
  let fixture: ComponentFixture<CasteTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasteTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasteTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
