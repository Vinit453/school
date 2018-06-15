import { TestBed, inject } from '@angular/core/testing';

import { SubcastService } from './subcast.service';

describe('SubcastService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SubcastService]
    });
  });

  it('should be created', inject([SubcastService], (service: SubcastService) => {
    expect(service).toBeTruthy();
  }));
});
