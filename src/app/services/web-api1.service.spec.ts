import { TestBed, inject } from '@angular/core/testing';

import { WebApi1Service } from './web-api1.service';

describe('WebApi1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebApi1Service]
    });
  });

  it('should be created', inject([WebApi1Service], (service: WebApi1Service) => {
    expect(service).toBeTruthy();
  }));
});
