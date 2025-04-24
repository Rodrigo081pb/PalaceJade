import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

import { CartService }       from '../../../../services/cart.service';
import { CheckoutComponent } from '../checkout/checkout.component';

interface DigitalItem {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

@Component({
  selector: 'app-loja-infoproduto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CheckoutComponent
  ],
  templateUrl: './loja-infoproduto.component.html',
  styleUrls: ['./loja-infoproduto.component.css']
})
export class LojaInfoprodutoComponent {
  digitalItems: DigitalItem[] = [
    {
      id: 1,
      nome: 'Curso Angular Avançado',
      descricao: 'Aprofunde seus conhecimentos em Angular e crie apps de escala.',
      preco: 299.00,
      imagem: 'https://i.pinimg.com/236x/bf/3a/f7/bf3af74658c268a3ddbd4714ec79733c.jpg'
    },
    {
      id: 2,
      nome: 'E-book UX/UI Design',
      descricao: 'Guia completo de design de interfaces modernas.',
      preco: 49.00,
      imagem: 'https://i.pinimg.com/236x/f1/d3/3f/f1d33fbe8a2475d7e9d290d1611a17fc.jpg'
    },
    {
      id: 3,
      nome: 'Template Next.js Profissional',
      descricao: 'Pacote de templates prontos para projetos corporativos.',
      preco: 199.00,
      imagem: 'https://i.pinimg.com/236x/3f/0f/5a/3f0f5a8d4c668cde6512b7fd55128a0d.jpg'
    }
  ];

  cartOpen = false;

  constructor(public cart: CartService) {}

  addToCart(item: DigitalItem) {
    this.cart.addItem({
      id: item.id,
      name: item.nome,
      price: item.preco,
      image: item.imagem
    });
  }

  toggleCart() {
    this.cartOpen = !this.cartOpen;
  }
}
