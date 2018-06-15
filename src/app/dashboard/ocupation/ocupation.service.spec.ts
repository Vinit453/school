import { TestBed, inject } from '@angular/core/testing';

import { OcupationService } from './ocupation.service';

describe('OcupationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcupationService]
    });
  });

  it('should be created', inject([OcupationService], (service: OcupationService) => {
    expect(service).toBeTruthy();
  }));
});
