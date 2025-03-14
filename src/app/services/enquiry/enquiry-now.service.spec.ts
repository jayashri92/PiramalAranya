import { TestBed } from '@angular/core/testing';

import { EnquiryNowService } from './enquiry-now.service';

describe('EnquiryNowService', () => {
  let service: EnquiryNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
