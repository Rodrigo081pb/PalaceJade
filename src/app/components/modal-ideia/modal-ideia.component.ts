import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { LogoComponent } from "../logo/logo.component";

@Component({
  selector: 'app-modal-ideia',
  standalone: true,
  imports: [CommonModule, FormsModule, LogoComponent],
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

  etapa: number = 1;
  opcoesSelecionadas: string[] = [];
  mensagem: string = '';

  toggleOpcao(valor: string) {
    if (this.opcoesSelecionadas.includes(valor)) {
      this.opcoesSelecionadas = this.opcoesSelecionadas.filter(op => op !== valor);
    } else {
      this.opcoesSelecionadas.push(valor);
    }
  }

  avancarEtapa() {
    this.etapa = 2;
  }

  voltarEtapa() {
    this.etapa = 1;
  }

  enviarMensagem(destino: string) {
    const texto = encodeURIComponent(`Olá! Tenho um projeto na categoria "${this.categoria}" que envolve: ${this.opcoesSelecionadas.join(', ')}. ${this.mensagem ? '\n\nMensagem: ' + this.mensagem : ''}`);

    switch (destino) {
      case 'whatsapp':
        window.open(`https://wa.me/5581984423591?text=${texto}`, '_blank');
        break;
      case 'instagram':
        window.open('https://www.instagram.com/hikarudev/', '_blank');
        break;
      case 'email':
        window.location.href = `mailto:hikarupalacejade@gmail.com?subject=Nova ideia de projeto&body=${texto}`;
        break;
    }

    this.fechar();
    this.etapa = 1;
    this.opcoesSelecionadas = [];
    this.mensagem = '';
  }
}
