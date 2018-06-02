import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissionNewComponent } from './permission-new.component';

describe('PermissionNewComponent', () => {
  let component: PermissionNewComponent;
  let fixture: ComponentFixture<PermissionNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissionNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
