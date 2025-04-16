import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categorias.component.html'
})
export class CategoriasComponent {

  @Output() categoriaChange = new EventEmitter<string>();

  categorias = [
    'Todos',
    'WhatsApp',
    'Agenda',
    'Lojas Virtuais',
    'Design',
    'Cardápio Digital',
    'Linktree',
    'Bots Telegram',
    'Projetos para o seu amor',
    'Outros',
  ];

  categoriaSelecionada = 'Todos';
  dropdownAberto = false;

  selecionarCategoria(categoria: string) {
    this.categoriaSelecionada = categoria;
    this.categoriaChange.emit(categoria === 'Todos' ? '' : categoria);
    this.dropdownAberto = false;
  }

  toggleDropdown() {
    this.dropdownAberto = !this.dropdownAberto;
  }
}
