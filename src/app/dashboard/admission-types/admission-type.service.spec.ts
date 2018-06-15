import { TestBed, inject } from '@angular/core/testing';

import { AdmissionTypeService } from './admission-type.service';

describe('AdmissionTypeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmissionTypeService]
    });
  });

  it('should be created', inject([AdmissionTypeService], (service: AdmissionTypeService) => {
    expect(service).toBeTruthy();
  }));
});
