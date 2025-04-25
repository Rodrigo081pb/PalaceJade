import { Component }                         from '@angular/core';
import { CommonModule }                      from '@angular/common';
import { RouterModule }                      from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { ModalContatoComponent }             from '../../../components/modal-contato/modal-contato.component';
import { ModalIdeiaComponent }               from '../../../components/modal-ideia/modal-ideia.component';
import { JokerCardComponent }                from '../../../components/cards/joker-card/joker-card.component';

@Component({
  selector: 'app-love',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ModalContatoComponent,
    ModalIdeiaComponent,
    JokerCardComponent
  ],
  templateUrl: './love.component.html',
  styleUrls: ['./love.component.css'],
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
export class LoveComponent {
  modalAberto = false;
  modalIdeiaAberto = false;
  previewAberto = false;

  servicoSelecionado = '';
  cardPreviewSelecionado = { titulo: '', descricao: '' };

  cards = [
    {
      titulo: 'Pedido de Namoro Interativo',
      descricao: 'Uma página especial com história, efeitos e botão mágico para dizer "Sim".',
      icone: 'fas fa-ring',
      rota: '/pedido'             // <-- define aqui a rota alvo
    },
    {
      titulo: 'Polaroid com Música',
      descricao: 'Fotos em formato polaroid com trilha sonora para emocionar.',
      icone: 'fas fa-music',
      rota: '/polaroid'
    },
  ];

  abrirModal(nome: string) {
    this.servicoSelecionado = nome;
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

  abrirPreview(card: any) {
    this.cardPreviewSelecionado = card;
    this.previewAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharPreview() {
    this.previewAberto = false;
    document.body.style.overflow = 'auto';
  }
}
