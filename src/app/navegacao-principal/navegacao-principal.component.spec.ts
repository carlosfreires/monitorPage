import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavegacaoPrincipalComponent } from './navegacao-principal.component';

describe('NavegacaoPrincipalComponent', () => {
  let component: NavegacaoPrincipalComponent;
  let fixture: ComponentFixture<NavegacaoPrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavegacaoPrincipalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavegacaoPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
