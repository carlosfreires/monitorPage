import { TestBed } from '@angular/core/testing';

import { ListarEquipamentosService } from './listar-equipamentos.service';

describe('ListarEquipamentosService', () => {
  let service: ListarEquipamentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListarEquipamentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
