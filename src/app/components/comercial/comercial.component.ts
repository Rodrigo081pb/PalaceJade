import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comercial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comercial.component.html',
})
export class ComercialComponent {
  currentSlide = 0;

  // Este método calcula o estilo com base no slide atual
  get currentSlideStyle(): string {
    return `${this.currentSlide * 100}vw`;
  }

  moveToSlide(index: number): void {
    this.currentSlide = index;
  }
}
