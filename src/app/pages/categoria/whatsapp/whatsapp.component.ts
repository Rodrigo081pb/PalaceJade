import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

import { ModalContatoComponent } from '../../../components/modal-contato/modal-contato.component';
import { JokerCardComponent } from '../../../components/cards/joker-card/joker-card.component';
import { ModalIdeiaComponent } from '../../../components/modal-ideia/modal-ideia.component';
import { BotAtendimentoComponent } from '../../projects/whatsapp/bot-atendimento/bot-atendimento.component';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [
    CommonModule,
    ModalContatoComponent,
    JokerCardComponent,
    ModalIdeiaComponent,
    BotAtendimentoComponent
  ],
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.css'],
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
export class WhatsappComponent {
  botAberto = false;
  modalIdeiaAberto = false;
  modalAberto = false;

  // Agora usamos um array cards para o *ngFor
  cards = [
    {
      icon: 'fa-robot',
      title: 'Bot de Atendimento Inteligente',
      desc: 'Automatize o WhatsApp da sua empresa com fluxos personalizados, respostas rápidas e integração com seu time.'
    },
    {
      icon: 'fa-store',
      title: 'Sistema de Pedidos via WhatsApp',
      desc: 'Receba pedidos automáticos com catálogo no WhatsApp. Ideal para deliveries, eventos e lojas.'
    },
    {
      icon: 'fa-calendar-check',
      title: 'Agendamento com Confirmação',
      desc: 'Clientes escolhem um horário, recebem confirmação automática e você evita no-shows.'
    },
    {
      icon: 'fa-hand-holding-usd',
      title: 'Pix Automático via WhatsApp',
      desc: 'Geração de cobrança automática com QR Code Pix. Integração perfeita com atendimento ou pedidos.'
    },
    {
      icon: 'fa-images',
      title: 'Catálogo Interativo',
      desc: 'Crie menus de produtos com imagens, links e botões que direcionam para o pedido.'
    },
    {
      icon: 'fa-star',
      title: 'SAC com Avaliação',
      desc: 'Atendimento automático com avaliação via estrelas. Meça a satisfação do cliente.'
    }
  ];

  abrirBotDemo() {
    this.botAberto = true;
    document.body.style.overflow = 'hidden';
  }
  fecharBotDemo() {
    this.botAberto = false;
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

  abrirModal() {
    this.modalAberto = true;
    document.body.style.overflow = 'hidden';
  }
  fecharModal() {
    this.modalAberto = false;
    document.body.style.overflow = 'auto';
  }

  onAbrirContatoFromBot() {
    this.fecharBotDemo();
    this.abrirModal();
  }
}
