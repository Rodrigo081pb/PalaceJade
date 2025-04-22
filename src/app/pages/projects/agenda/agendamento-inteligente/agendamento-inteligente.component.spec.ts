import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendamentoInteligenteComponent } from './agendamento-inteligente.component';

describe('AgendamentoInteligenteComponent', () => {
  let component: AgendamentoInteligenteComponent;
  let fixture: ComponentFixture<AgendamentoInteligenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoInteligenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendamentoInteligenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
