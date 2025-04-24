import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ModalContatoComponent } from '../../../components/modal-contato/modal-contato.component';
import { ModalIdeiaComponent } from '../../../components/modal-ideia/modal-ideia.component';
import { JokerCardComponent } from '../../../components/cards/joker-card/joker-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cardapio-digital',
  standalone: true,
  imports: [CommonModule, ModalContatoComponent, ModalIdeiaComponent, JokerCardComponent,RouterLink],
  templateUrl: './cardapio-digital.component.html',
  styleUrls: ['./cardapio-digital.component.css'],
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
export class CardapioDigitalComponent {

  cards = [
    {
      icone: 'fas fa-concierge-bell',
      titulo: 'Restaurante Completo',
      descricao: 'Cardápio digital com imagens, categorias, preços e pedido via WhatsApp.',
      rota: '/restaurante-completo'
    },
    {
      icone: 'fas fa-pizza-slice',
      titulo: 'Pizzaria com Personalização',
      descricao: 'Escolha de sabores, tamanho, bordas e envio automático pro atendente.',
      rota: '/restaurante-completo'
    },
    {
      icone: 'fas fa-hamburger',
      titulo: 'Hamburgueria Personalizada',
      descricao: 'Cliente escolhe pão, carne, adicionais e envia tudo com 1 clique no WhatsApp.',
      rota: '/restaurante-completo'
    },
    {
      icone: 'fas fa-motorcycle',
      titulo: 'Delivery Express',
      descricao: 'Pedidos rápidos com CEP, produtos e botão de envio sem cadastro.',
      rota: '/restaurante-completo'
    },
    {
      icone: 'fas fa-qrcode',
      titulo: 'QR Code para Mesas',
      descricao: 'Clientes escaneiam e acessam o cardápio direto da mesa — rápido e higiênico.',
      rota: '/restaurante-completo'
    },
    {
      icone: 'fas fa-truck',
      titulo: 'Food Truck Interativo',
      descricao: 'Cardápio simples e direto pro celular com botão de chamada rápida.',
      rota: '/restaurante-completo'
    },
    {
      icone: 'fas fa-bread-slice',
      titulo: 'Lanchonete com Catálogo',
      descricao: 'Lista de combos, sucos, lanches, com imagem e botão de pedido automático.',
      rota: '/restaurante-completo'
    },
    {
      icone: 'fas fa-cookie-bite',
      titulo: 'Padaria ou Pastelaria',
      descricao: 'Visualização de produtos com estoque diário e atendimento ágil.',
      rota: '/restaurante-completo'
    }
  ];


  modalAberto = false;
  modalIdeiaAberto = false;

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
