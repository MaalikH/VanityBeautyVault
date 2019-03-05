import { TestBed } from '@angular/core/testing';

import { UnreadService } from './unread.service';

describe('UnreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnreadService = TestBed.get(UnreadService);
    expect(service).toBeTruthy();
  });
});
