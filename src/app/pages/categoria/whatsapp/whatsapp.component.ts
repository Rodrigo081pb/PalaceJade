import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { ModalContatoComponent } from "../../../components/modal-contato/modal-contato.component";
import { JokerCardComponent } from "../../../components/cards/joker-card/joker-card.component";
import { ModalIdeiaComponent } from '../../../components/modal-ideia/modal-ideia.component';

@Component({
  selector: 'app-whatsapp',
  standalone: true,
  imports: [CommonModule, ModalContatoComponent, JokerCardComponent, ModalIdeiaComponent],
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
  modalIdeiaAberto = false;

  abrirModalIdeia() {
    this.modalIdeiaAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharModalIdeia() {
    this.modalIdeiaAberto = false;
    document.body.style.overflow = 'auto';
  }


  modalAberto = false;

  abrirModal() {
    this.modalAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharModal() {
    this.modalAberto = false;
    document.body.style.overflow = 'auto';
  }
}
