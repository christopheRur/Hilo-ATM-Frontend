import { TestBed } from '@angular/core/testing';

import { HiloService } from './hilo.service';

describe('HiloService', () => {
  let service: HiloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HiloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
