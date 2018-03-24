import { TestBed, inject } from '@angular/core/testing';

import { IgtdelgateService } from './igtdelgate.service';

describe('IgtdelgateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IgtdelgateService]
    });
  });

  it('should be created', inject([IgtdelgateService], (service: IgtdelgateService) => {
    expect(service).toBeTruthy();
  }));
});
