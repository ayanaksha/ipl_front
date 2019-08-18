import { TestBed } from '@angular/core/testing';

import { HcauthService } from './hcauth.service';

describe('HcauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HcauthService = TestBed.get(HcauthService);
    expect(service).toBeTruthy();
  });
});
