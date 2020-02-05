import { TestBed } from '@angular/core/testing';

import { SharecontactsService } from './sharecontacts.service';

describe('SharecontactsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharecontactsService = TestBed.get(SharecontactsService);
    expect(service).toBeTruthy();
  });
});
