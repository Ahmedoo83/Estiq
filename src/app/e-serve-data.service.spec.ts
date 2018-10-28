import { TestBed } from '@angular/core/testing';

import { EServeDataService } from './e-serve-data.service';

describe('EServeDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EServeDataService = TestBed.get(EServeDataService);
    expect(service).toBeTruthy();
  });
});
