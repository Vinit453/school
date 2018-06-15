import { TestBed, inject } from '@angular/core/testing';

import { AdmissionService } from './admission.service';

describe('AdmissionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmissionService]
    });
  });

  it('should be created', inject([AdmissionService], (service: AdmissionService) => {
    expect(service).toBeTruthy();
  }));
});
