import { TestBed } from '@angular/core/testing';

import { KiteService } from './kite.service';

describe('KiteService', () => {
  let service: KiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
