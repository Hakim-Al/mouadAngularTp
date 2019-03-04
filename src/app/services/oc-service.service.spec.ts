import { TestBed, inject } from '@angular/core/testing';

import { OcServiceService } from './oc-service.service';

describe('OcServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OcServiceService]
    });
  });

  it('should be created', inject([OcServiceService], (service: OcServiceService) => {
    expect(service).toBeTruthy();
  }));
});
