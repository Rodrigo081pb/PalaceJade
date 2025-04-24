// src/app/pages/loja-carrinho/loja-carrinho.component.ts
import { Component } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { RouterModule }  from '@angular/router';
import { CartService, CartItem } from '../../../../services/cart.service';

@Component({
  selector: 'app-loja-carrinho',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './loja-carrinho.component.html',
})
export class LojaCarrinhoComponent {
  constructor(public cart: CartService) {}

  increment(i: CartItem) {
    this.cart.updateQty(i.id, i.qty + 1);
  }
  decrement(i: CartItem) {
    if (i.qty > 1) this.cart.updateQty(i.id, i.qty - 1);
    else            this.cart.removeItem(i.id);
  }
}
