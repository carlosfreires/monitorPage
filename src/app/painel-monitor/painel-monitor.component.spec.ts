import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelMonitorComponent } from './painel-monitor.component';

describe('PainelMonitorComponent', () => {
  let component: PainelMonitorComponent;
  let fixture: ComponentFixture<PainelMonitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PainelMonitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelMonitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
