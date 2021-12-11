import { TestBed } from '@angular/core/testing';

import { ServicioNovedadService } from './servicio-novedad.service';

describe('ServicioNovedadService', () => {
  let service: ServicioNovedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioNovedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
