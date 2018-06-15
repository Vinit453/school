import { TestBed, inject } from '@angular/core/testing';

import { SchoolCastService } from './school-cast.service';

describe('SchoolCastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolCastService]
    });
  });

  it('should be created', inject([SchoolCastService], (service: SchoolCastService) => {
    expect(service).toBeTruthy();
  }));
});
