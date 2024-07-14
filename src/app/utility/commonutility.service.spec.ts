import { TestBed } from '@angular/core/testing';

import { CommonutilityService } from './commonutility.service';

describe('CommonutilityService', () => {
  let service: CommonutilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonutilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
