// src/app/pages/lojas-virtuais/lojas-virtuais.component.ts
import { Component } from '@angular/core';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';
import { CartService }    from '../../../services/cart.service';
import { ModalContatoComponent } from '../../../components/modal-contato/modal-contato.component';
import { JokerCardComponent }    from '../../../components/cards/joker-card/joker-card.component';
import { ModalIdeiaComponent }   from '../../../components/modal-ideia/modal-ideia.component';

interface Card {
  icone: string;
  titulo: string;
  descricao: string;
  route?: string;      // rota de “Explorar projeto”
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
})
export class LojasVirtuaisComponent {
  modalContato = false;
  modalIdeia   = false;

  cards: Card[] = [
    {
      icone:    'fas fa-box-open',
      titulo:   'Loja com Catálogo & WhatsApp',
      descricao:'Catálogo com botão direto pro WhatsApp.',
      route:    '/loja-catalogo'
    },
    {
      icone:    'fas fa-shopping-cart',
      titulo:   'Carrinho + Pagamento Pix',
      descricao:'E-commerce simples com carrinho e checkout via Pix.',
      route:    '/loja-carrinho'
    },
    {
      icone:    'fas fa-cube',
      titulo:   'Produto Único c/ Checkout',
      descricao:'Página focada num produto e checkout rápido.',
      route:    '/checkout'
    },
    {
      icone:    'fas fa-book-open',
      titulo:   'Loja de Infoprodutos',
      descricao:'Venda cursos, ebooks e templates digitais.',
      route:    '/loja-infoprodutos'
    },
    {
      icone:    'fas fa-user-plus',
      titulo:   'Landing Page p/ Leads',
      descricao:'Captura e gestão de leads com formulário.',
      // sem explorar
    }
  ];

  constructor(public cart: CartService) {}

  toggleContato() { this.modalContato = !this.modalContato; }
  toggleIdeia()   { this.modalIdeia   = !this.modalIdeia; }
}
