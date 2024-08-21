import { TestBed } from '@angular/core/testing';

import { ServiceHeroesService } from './service-heroes.service';

describe('ServiceHeroesService', () => {
  let service: ServiceHeroesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceHeroesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
