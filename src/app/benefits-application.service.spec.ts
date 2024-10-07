import { TestBed } from '@angular/core/testing';

import { BenefitsApplicationService } from './benefits-application.service';

describe('BenefitsApplicationService', () => {
  let service: BenefitsApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BenefitsApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
