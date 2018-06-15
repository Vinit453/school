import { TestBed, inject } from '@angular/core/testing';

import { TalkuaService } from './talkua.service';

describe('TalkuaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TalkuaService]
    });
  });

  it('should be created', inject([TalkuaService], (service: TalkuaService) => {
    expect(service).toBeTruthy();
  }));
});
