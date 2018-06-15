import { TestBed, inject } from '@angular/core/testing';

import { SchoolsubCastesService } from './schoolsub-castes.service';

describe('SchoolsubCastesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolsubCastesService]
    });
  });

  it('should be created', inject([SchoolsubCastesService], (service: SchoolsubCastesService) => {
    expect(service).toBeTruthy();
  }));
});
