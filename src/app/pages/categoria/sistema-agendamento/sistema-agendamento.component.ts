import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ModalContatoComponent } from "../../../components/modal-contato/modal-contato.component";
import { JokerCardComponent } from "../../../components/cards/joker-card/joker-card.component";
import { ModalIdeiaComponent } from "../../../components/modal-ideia/modal-ideia.component";

@Component({
  selector: 'app-sistema-agendamento',
  standalone: true,
  imports: [CommonModule, ModalContatoComponent, JokerCardComponent, ModalIdeiaComponent],
  templateUrl: './sistema-agendamento.component.html',
  styleUrls: ['./sistema-agendamento.component.css'],
  animations: [
    trigger('modalAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class SistemaAgendamentoComponent {
  modalAberto = false;
  modalIdeiaAberto = false;

  cards = [
    {
      icone: 'fas fa-cut',
      titulo: 'Agendamento para Salões',
      descricao: 'Clientes marcam cortes ou serviços com data/hora pelo link. Confirmações automáticas no WhatsApp.'
    },
    {
      icone: 'fas fa-stethoscope',
      titulo: 'Consultas Médicas ou Terapias',
      descricao: 'Pacientes agendam consultas com envio de lembretes automáticos e link para chamada.'
    },
    {
      icone: 'fas fa-chalkboard-teacher',
      titulo: 'Aulas, Mentorias ou Coaching',
      descricao: 'Crie seu sistema de agendamento de sessões com envio de links para Zoom/Google Meet automaticamente.'
    },
    {
      icone: 'fas fa-camera-retro',
      titulo: 'Sessões de Fotos',
      descricao: 'Clientes escolhem pacotes e horários. Ideal para fotógrafos, estúdios e criadores de conteúdo.'
    },
    {
      icone: 'fas fa-birthday-cake',
      titulo: 'Eventos e RSVP',
      descricao: 'Convidados confirmam presença automaticamente, recebem lembretes e localização do evento.'
    },
    {
      icone: 'fas fa-laptop-code',
      titulo: 'Agendamento para Freelancers',
      descricao: 'Ideal para designers, programadores e criativos. Facilita orçamentos e reuniões com leads.'
    }
  ];

  abrirModal() {
    this.modalAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharModal() {
    this.modalAberto = false;
    document.body.style.overflow = 'auto';
  }

  abrirModalIdeia() {
    this.modalIdeiaAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharModalIdeia() {
    this.modalIdeiaAberto = false;
    document.body.style.overflow = 'auto';
  }
}
