import { TestBed, inject } from '@angular/core/testing';

import { SchoolSectionService } from './school-section.service';

describe('SchoolSectionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolSectionService]
    });
  });

  it('should be created', inject([SchoolSectionService], (service: SchoolSectionService) => {
    expect(service).toBeTruthy();
  }));
});
