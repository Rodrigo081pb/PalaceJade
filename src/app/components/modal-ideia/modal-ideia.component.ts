import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from '../logo/logo.component';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal-ideia',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    LogoComponent,
  ],
  templateUrl: './modal-ideia.component.html',
  styleUrls: ['./modal-ideia.component.css'],
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
export class ModalIdeiaComponent {
  @Input() aberto: boolean = false;
  @Input() categoria: string = '';
  @Input() fechar!: () => void;
  @Input() abrirContato!: () => void;

  etapa: number = 1;
  nome: string = '';
  empreendedor: string = '';
  mensagem: string = '';
  erro: string = '';
  opcoesSelecionadas: string[] = [];

  enviado: boolean = false;

  opcoes: string[] = [
    'Agendamento',
    'Catálogo',
    'ChatBot',
    'Formulários',
    'Automação',
    'Design',
    'Social Media',
    'Outro'
  ];

  toggleOpcao(valor: string) {
    if (this.opcoesSelecionadas.includes(valor)) {
      this.opcoesSelecionadas = this.opcoesSelecionadas.filter(op => op !== valor);
    } else {
      this.opcoesSelecionadas.push(valor);
    }
  }

  avancarEtapa() {
    this.erro = '';

    if (!this.nome.trim() || this.opcoesSelecionadas.length === 0) {
      this.erro = 'Por favor, preencha todos os campos obrigatórios com informações válidas.';
      return;
    }

    this.etapa = 2;
  }

  confirmarEnvio() {
    this.etapa = 3;
    setTimeout(() => {
      this.enviado = true;
    }, 800);
  }

  irParaContato() {
    this.resetar();
    this.abrirContato();
  }

  fecharModalComReset() {
    this.resetar();
    setTimeout(() => this.fechar(), 300);
  }

  resetar() {
    this.etapa = 1;
    this.nome = '';
    this.empreendedor = '';
    this.mensagem = '';
    this.opcoesSelecionadas = [];
    this.erro = '';
    this.enviado = false;
  }
}
