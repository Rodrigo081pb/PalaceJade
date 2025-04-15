import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SistemaAgendamentoComponent } from './sistema-agendamento.component';

describe('SistemaAgendamentoComponent', () => {
  let component: SistemaAgendamentoComponent;
  let fixture: ComponentFixture<SistemaAgendamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SistemaAgendamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SistemaAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
