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
      imagem: 'https://i.pinimg.com/736x/ab/cd/ef/abcdef123456.jpg'
    },
    {
      id: 2,
      nome: 'E-book UX/UI Design',
      descricao: 'Guia completo de design de interfaces modernas.',
      preco: 49.00,
      imagem: 'https://i.pinimg.com/736x/12/34/56/123456abcdef.jpg'
    },
    {
      id: 3,
      nome: 'Template Next.js Profissional',
      descricao: 'Pacote de templates prontos para projetos corporativos.',
      preco: 199.00,
      imagem: 'https://i.pinimg.com/736x/98/76/54/987654abcdef.jpg'
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
