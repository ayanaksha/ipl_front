import { TestBed } from '@angular/core/testing';

import { HelloworldmsgService } from './helloworldmsg.service';

describe('HelloworldmsgService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HelloworldmsgService = TestBed.get(HelloworldmsgService);
    expect(service).toBeTruthy();
  });
});
