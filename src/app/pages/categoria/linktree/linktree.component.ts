// src/app/pages/linktree/linktree.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContatoComponent } from '../../../components/modal-contato/modal-contato.component';
import { ModalIdeiaComponent } from '../../../components/modal-ideia/modal-ideia.component';
import { JokerCardComponent } from '../../../components/cards/joker-card/joker-card.component';

@Component({
  selector: 'app-linktree',
  standalone: true,
  imports: [CommonModule, ModalContatoComponent, ModalIdeiaComponent, JokerCardComponent],
  templateUrl: './linktree.component.html',
  styleUrls: ['./linktree.component.css']
})
export class LinktreeComponent {
  modalAberto = false;
  modalIdeiaAberto = false;
  modalPreviewAberto = false;
  selectedBusiness = '';
  selectedColor = '';

  negocios = [
    { nome: 'Salão de Beleza', icone: 'fas fa-scissors', descricao: 'Agenda online, Instagram, localização e botão de contato direto.', cor: 'from-pink-500 to-purple-500' },
    { nome: 'Barbearia', icone: 'fas fa-briefcase', descricao: 'Agendamento, cortes em destaque, avaliações e redes sociais.', cor: 'from-gray-700 to-gray-500' },
    { nome: 'Estúdio de Tatuagem', icone: 'fas fa-pen-nib', descricao: 'Portfólio, Instagram, orçamento e formulário de agendamento.', cor: 'from-red-500 to-pink-500' },
    { nome: 'Restaurante / Lanchonete', icone: 'fas fa-hamburger', descricao: 'Cardápio interativo, WhatsApp para pedidos e localização.', cor: 'from-yellow-500 to-red-400' },
    { nome: 'Loja de Roupas', icone: 'fas fa-tshirt', descricao: 'Coleções, botão de pedido e Instagram da loja.', cor: 'from-indigo-500 to-purple-400' },
    { nome: 'Criador de Conteúdo', icone: 'fas fa-video', descricao: 'Links para vídeos, cursos e redes sociais.', cor: 'from-blue-500 to-teal-400' },
    { nome: 'Profissional da Saúde', icone: 'fas fa-brain', descricao: 'Agendamento, redes sociais e formulário de pré-atendimento.', cor: 'from-green-400 to-blue-400' },
    { nome: 'Artista / Músico', icone: 'fas fa-guitar', descricao: 'Spotify, agenda de shows, portfólio, contato para eventos.', cor: 'from-yellow-400 to-orange-500' }
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

  abrirPreview(nome: string) {
    const negocio = this.negocios.find(n => n.nome === nome);
    if (negocio) {
      this.selectedBusiness = negocio.nome;
      this.selectedColor = negocio.cor;
      this.modalPreviewAberto = true;
      document.body.style.overflow = 'hidden';
    }
  }

  fecharPreview() {
    this.modalPreviewAberto = false;
    document.body.style.overflow = 'auto';
  }
}
