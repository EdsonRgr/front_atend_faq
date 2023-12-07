import { TestBed } from '@angular/core/testing';

import { SolicitaoService } from './solicitao.service';

describe('SolicitaoService', () => {
  let service: SolicitaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
