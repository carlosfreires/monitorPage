import { TestBed } from '@angular/core/testing';

import { SolicitarAcessoService } from './solicitar-acesso.service';

describe('SolicitarAcessoService', () => {
  let service: SolicitarAcessoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolicitarAcessoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
