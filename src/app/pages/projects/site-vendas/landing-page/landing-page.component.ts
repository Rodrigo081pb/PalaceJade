import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContatoComponent } from '../../../../components/modal-contato/modal-contato.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, ModalContatoComponent, RouterLink],
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
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
