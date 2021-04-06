import { TestBed } from '@angular/core/testing';

import { Payment.DataService } from './payment.data.service';

describe('Payment.DataService', () => {
  let service: Payment.DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Payment.DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
