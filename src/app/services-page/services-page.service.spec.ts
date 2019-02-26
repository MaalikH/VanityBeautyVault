import { TestBed } from '@angular/core/testing';

import { ServicesPageService } from './services-page.service';

describe('ServicesPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicesPageService = TestBed.get(ServicesPageService);
    expect(service).toBeTruthy();
  });
});
