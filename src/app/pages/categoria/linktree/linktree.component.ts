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
  selectedServico = '';

  negocios = [
    {
      nome: 'Salão de Beleza',
      descricao: 'Agenda online, Instagram, localização e botão de contato direto.',
      icone: 'fas fa-scissors',
      cor: 'from-pink-500 to-pink-300'
    },
    {
      nome: 'Barbearia',
      descricao: 'Agendamento, cortes em destaque, avaliações e redes sociais.',
      icone: 'fas fa-briefcase',
      cor: 'from-gray-700 to-gray-500'
    },
    {
      nome: 'Estúdio de Tatuagem',
      descricao: 'Portfólio, Insta, orçamento e agendamento fácil.',
      icone: 'fas fa-pen-nib',
      cor: 'from-indigo-600 to-purple-500'
    },
    {
      nome: 'Restaurante / Lanchonete',
      descricao: 'Cardápio interativo, WhatsApp e localização.',
      icone: 'fas fa-hamburger',
      cor: 'from-yellow-500 to-red-500'
    },
    {
      nome: 'Loja de Roupas',
      descricao: 'Coleções, pedido direto e vitrine digital.',
      icone: 'fas fa-tshirt',
      cor: 'from-blue-500 to-purple-400'
    },
    {
      nome: 'Criador de Conteúdo',
      descricao: 'Vídeos, cursos, redes e comunidade.',
      icone: 'fas fa-video',
      cor: 'from-red-600 to-orange-500'
    },
    {
      nome: 'Profissional da Saúde',
      descricao: 'Agendamento, redes sociais e formulário.',
      icone: 'fas fa-brain',
      cor: 'from-green-500 to-teal-400'
    },
    {
      nome: 'Artista / Músico',
      descricao: 'Spotify, agenda de shows e portfólio.',
      icone: 'fas fa-guitar',
      cor: 'from-yellow-300 to-purple-500'
    }
  ];

  abrirModal() {
    this.modalAberto = true;
    document.body.style.overflow = 'hidden';
  }

  abrirModalIdeia() {
    this.modalIdeiaAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharModal() {
    this.modalAberto = false;
    document.body.style.overflow = 'auto';
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
    }
  }

  fecharPreview() {
    this.modalPreviewAberto = false;
  }
}
