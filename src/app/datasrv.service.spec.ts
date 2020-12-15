import { TestBed } from '@angular/core/testing';

import { DatasrvService } from './datasrv.service';

describe('DatasrvService', () => {
  let service: DatasrvService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatasrvService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
