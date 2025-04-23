import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: string;
  imagem: string;
  whatsappLink: string;
}

@Component({
  selector: 'app-loja-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './loja-catalogo.component.html',
})
export class LojaCatalogoComponent {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Camiseta Urbana',
      descricao: 'Malha leve com estampa exclusiva.',
      preco: 'R$ 79,90',
      imagem: 'https://i.pinimg.com/736x/33/5d/b2/335db22ce001c8b896e55218f1dcdc4c.jpg',
      whatsappLink:
        'https://wa.me/5511999999999?text=Olá!%20Quero%20comprar%20a%20Camiseta%20Urbana',
    },
    {
      id: 2,
      nome: 'Tênis Esportivo',
      descricao: 'Conforto e performance em um só calçado.',
      preco: 'R$ 249,90',
      imagem: 'https://i.pinimg.com/236x/78/15/6c/78156ccd0f4c42aee2da641dff2db22e.jpg',
      whatsappLink:
        'https://wa.me/5511999999999?text=Olá!%20Quero%20comprar%20o%20Tênis%20Esportivo',
    },
    {
      id: 3,
      nome: 'Mochila TechPack',
      descricao: 'Protege seu notebook e acessórios.',
      preco: 'R$ 159,90',
      imagem: 'https://i.pinimg.com/736x/2b/fd/0a/2bfd0af95075bfeac2b78dd3dd7a1aae.jpg',
      whatsappLink:
        'https://wa.me/5511999999999?text=Olá!%20Quero%20comprar%20a%20Mochila%20TechPack',
    },
    {
      id: 4,
      nome: 'Relógio Smart',
      descricao: 'Monitore sua saúde e notificações.',
      preco: 'R$ 299,90',
      imagem: 'https://i.pinimg.com/236x/0d/0b/80/0d0b8088b45b9e0c97a80bfbb537e382.jpg',
      whatsappLink:
        'https://wa.me/5511999999999?text=Olá!%20Quero%20comprar%20o%20Relógio%20Smart',
    },
    {
      id: 5,
      nome: 'Fone Bluetooth',
      descricao: 'Áudio cristalino e cancelamento de ruído.',
      preco: 'R$ 129,90',
      imagem: 'https://i.pinimg.com/236x/cc/59/6d/cc596d18eb396c98482df972ab75ebc4.jpg',
      whatsappLink:
        'https://wa.me/5511999999999?text=Olá!%20Quero%20comprar%20o%20Fone%20Bluetooth',
    },
  ];

  // trackBy para otimizar o *ngFor
  trackById(_: number, item: Produto): number {
    return item.id;
  }
}
