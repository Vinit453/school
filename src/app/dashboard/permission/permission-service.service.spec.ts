import { TestBed, inject } from '@angular/core/testing';

import { PermissionServiceService } from './permission-service.service';

describe('PermissionServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionServiceService]
    });
  });

  it('should be created', inject([PermissionServiceService], (service: PermissionServiceService) => {
    expect(service).toBeTruthy();
  }));
});
