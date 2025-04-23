import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

import { ModalContatoComponent } from '../../../components/modal-contato/modal-contato.component';
import { JokerCardComponent }    from '../../../components/cards/joker-card/joker-card.component';
import { ModalIdeiaComponent }    from '../../../components/modal-ideia/modal-ideia.component';

interface Card {
  icone: string;
  titulo: string;
  descricao: string;
  valor: string;
}

@Component({
  selector: 'app-lojas-virtuais',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ModalContatoComponent,
    JokerCardComponent,
    ModalIdeiaComponent
  ],
  templateUrl: './lojas-virtuais.component.html',
  styleUrls: ['./lojas-virtuais.component.css'],
  animations: [
    trigger('modalAnim', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('200ms ease-out',
          style({ opacity: 1, transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in',
          style({ opacity: 0, transform: 'scale(0.9)' }))
      ])
    ])
  ]
})
export class LojasVirtuaisComponent {
  modalAberto     = false;
  modalIdeiaAberto = false;

  cards: Card[] = [
    {
      icone:    'fas fa-box-open',
      titulo:   'Loja com Catálogo e WhatsApp',
      descricao:'Página com exibição de produtos e botão direto pro WhatsApp.',
      valor:    'catalogo'
    },
    {
      icone:    'fas fa-shopping-cart',
      titulo:   'Carrinho + Pagamento Pix',
      descricao:'E-commerce simples com carrinho e checkout via Pix.',
      valor:    'carrinho'
    },
    {
      icone:    'fas fa-cube',
      titulo:   'Produto Único com Checkout',
      descricao:'Foque em um único produto com botão de compra.',
      valor:    'produto'
    },
    {
      icone:    'fas fa-book',
      titulo:   'Loja para Infoprodutos',
      descricao:'Venda cursos, ebooks e digitais com gateway de pagamento.',
      valor:    'infoprodutos'
    },
    {
      icone:    'fas fa-user-plus',
      titulo:   'Landing Page para Leads',
      descricao:'Captura de e-mail/telefone para lançamentos e ofertas.',
      valor:    'leads'
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
