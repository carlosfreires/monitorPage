import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarAcessoComponent } from './solicitar-acesso.component';

describe('SolicitarAcessoComponent', () => {
  let component: SolicitarAcessoComponent;
  let fixture: ComponentFixture<SolicitarAcessoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitarAcessoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
