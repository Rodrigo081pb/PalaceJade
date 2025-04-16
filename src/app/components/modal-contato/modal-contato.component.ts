import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-modal-contato',
  standalone: true,
  imports: [CommonModule, LogoComponent],
  templateUrl: './modal-contato.component.html',
  styleUrls: ['./modal-contato.component.css'],
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
export class ModalContatoComponent {
  @Input() aberto: boolean = false;
  @Input() fechar!: () => void;
}
