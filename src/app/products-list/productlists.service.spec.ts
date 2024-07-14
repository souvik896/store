import { TestBed } from '@angular/core/testing';

import { ProductlistsService } from './productlists.service';

describe('ProductlistsService', () => {
  let service: ProductlistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductlistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
