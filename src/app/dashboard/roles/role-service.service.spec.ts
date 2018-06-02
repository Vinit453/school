import { TestBed, inject } from '@angular/core/testing';

import { RoleServiceService } from './role-service.service';

describe('RoleServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleServiceService]
    });
  });

  it('should be created', inject([RoleServiceService], (service: RoleServiceService) => {
    expect(service).toBeTruthy();
  }));
});
