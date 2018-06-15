import { TestBed, inject } from '@angular/core/testing';

import { RelitionService } from './relition.service';

describe('RelitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelitionService]
    });
  });

  it('should be created', inject([RelitionService], (service: RelitionService) => {
    expect(service).toBeTruthy();
  }));
});
