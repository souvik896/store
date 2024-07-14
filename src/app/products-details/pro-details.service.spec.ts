import { TestBed } from '@angular/core/testing';

import { ProDetailsService } from './pro-details.service';

describe('ProDetailsService', () => {
  let service: ProDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
