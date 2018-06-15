import { TestBed, inject } from '@angular/core/testing';

import { InstitudesService } from './institudes.service';

describe('InstitudesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstitudesService]
    });
  });

  it('should be created', inject([InstitudesService], (service: InstitudesService) => {
    expect(service).toBeTruthy();
  }));
});
