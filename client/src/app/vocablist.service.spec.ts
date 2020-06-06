import { TestBed } from '@angular/core/testing';

import { VocablistService } from './vocablist.service';

describe('VocablistService', () => {
  let service: VocablistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VocablistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
