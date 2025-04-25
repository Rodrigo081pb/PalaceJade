import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

@Component({
  selector: 'app-pedido',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  resposta: 'sim' | 'nao' | null = null;
  fireworks: Array<{ x: number; y: number }> = [];

  constructor(private location: Location) {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.fireworks.push({ x: Math.random() * 100, y: Math.random() * 50 });
    }
  }

  responder(opcao: 'sim' | 'nao') {
    this.resposta = opcao;
  }

  voltar() {
    this.location.back();
  }
}
