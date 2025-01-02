import { TestBed } from '@angular/core/testing';

import { CadastrarEquipamentoService } from './cadastrar-equipamento.service';

describe('CadastrarEquipamentoService', () => {
  let service: CadastrarEquipamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastrarEquipamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
