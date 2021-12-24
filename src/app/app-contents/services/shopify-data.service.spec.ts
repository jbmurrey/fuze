import { TestBed } from '@angular/core/testing';

import { ShopifyDataService } from './shopify-data.service';

describe('ShopifyDataService', () => {
  let service: ShopifyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopifyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
