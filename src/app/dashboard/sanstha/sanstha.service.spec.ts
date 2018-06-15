import { TestBed, inject } from '@angular/core/testing';

import { SansthaService } from './sanstha.service';

describe('SansthaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SansthaService]
    });
  });

  it('should be created', inject([SansthaService], (service: SansthaService) => {
    expect(service).toBeTruthy();
  }));
});
