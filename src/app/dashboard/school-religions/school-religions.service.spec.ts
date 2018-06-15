import { TestBed, inject } from '@angular/core/testing';

import { SchoolReligionsService } from './school-religions.service';

describe('SchoolReligionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolReligionsService]
    });
  });

  it('should be created', inject([SchoolReligionsService], (service: SchoolReligionsService) => {
    expect(service).toBeTruthy();
  }));
});
