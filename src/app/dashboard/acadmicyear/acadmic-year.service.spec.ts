import { TestBed, inject } from '@angular/core/testing';

import { AcadmicYearService } from './acadmic-year.service';

describe('AcadmicYearService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcadmicYearService]
    });
  });

  it('should be created', inject([AcadmicYearService], (service: AcadmicYearService) => {
    expect(service).toBeTruthy();
  }));
});
