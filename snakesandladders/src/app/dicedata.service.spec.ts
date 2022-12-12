import { TestBed } from '@angular/core/testing';

import { DicedataService } from './dicedata.service';

describe('DicedataService', () => {
  let service: DicedataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicedataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
