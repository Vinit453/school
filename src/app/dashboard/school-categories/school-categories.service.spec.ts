import { TestBed, inject } from '@angular/core/testing';

import { SchoolCategoriesService } from './school-categories.service';

describe('SchoolCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SchoolCategoriesService]
    });
  });

  it('should be created', inject([SchoolCategoriesService], (service: SchoolCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
