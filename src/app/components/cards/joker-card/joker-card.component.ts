import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-joker-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './joker-card.component.html',
  styleUrls: ['./joker-card.component.css']
})
export class JokerCardComponent {
  @Input() categoria: string = '';
  @Output() abrirModal = new EventEmitter<void>();

  onClick() {
    this.abrirModal.emit();
  }
}
