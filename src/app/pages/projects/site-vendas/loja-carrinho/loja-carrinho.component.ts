import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }  from '@angular/forms';
import { RouterModule } from '@angular/router';

interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

@Component({
  selector: 'app-loja-carrinho',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './loja-carrinho.component.html',
  styleUrls: ['./loja-carrinho.component.css']
})
export class LojaCarrinhoComponent {
  produtos: Produto[] = [
    { id: 1, nome: 'Camiseta Urbana',  descricao: 'Malha leve c/ estampa exclusiva.', preco: 79.9,  imagem: 'https://i.pinimg.com/736x/33/5d/b2/335db22ce001c8b896e55218f1dcdc4c.jpg' },
    { id: 2, nome: 'Tênis Esportivo',  descricao: 'Conforto e performance.',    preco: 249.9, imagem: 'https://i.pinimg.com/236x/78/15/6c/78156ccd0f4c42aee2da641dff2db22e.jpg'   },
    { id: 3, nome: 'Mochila TechPack', descricao: 'Protege seu notebook e acessórios.', preco: 159.9, imagem: 'https://i.pinimg.com/736x/2b/fd/0a/2bfd0af95075bfeac2b78dd3dd7a1aae.jpg' },
    { id: 4, nome: 'Relógio Smart',   descricao: 'Monitore sua saúde e notificações.', preco: 299.9, imagem: 'https://i.pinimg.com/236x/0d/0b/80/0d0b8088b45b9e0c97a80bfbb537e382.jpg' },
    { id: 5, nome: 'Fone Bluetooth',  descricao: 'Áudio cristalino c/ cancelamento de ruído.', preco: 129.9, imagem: 'https://i.pinimg.com/236x/cc/59/6d/cc596d18eb396c98482df972ab75ebc4.jpg' }
  ];

  private carrinho = new Map<number, number>();
  modalAberto = false;
  checkoutAberto = false;

  get itensCarrinho() {
    return Array.from(this.carrinho.entries()).map(([id, qtd]) => ({
      produto: this.produtos.find(p => p.id === id)!,
      quantidade: qtd
    }));
  }

  adicionar(p: Produto) {
    const prev = this.carrinho.get(p.id) || 0;
    this.carrinho.set(p.id, prev + 1);
  }

  remover(id: number) {
    this.carrinho.delete(id);
  }

  incrementar(id: number) {
    const prev = this.carrinho.get(id) || 0;
    this.carrinho.set(id, prev + 1);
  }

  decrementar(id: number) {
    const prev = this.carrinho.get(id) || 0;
    if (prev <= 1) {
      this.carrinho.delete(id);
    } else {
      this.carrinho.set(id, prev - 1);
    }
  }

  getTotal() {
    return this.itensCarrinho.reduce((sum, i) => sum + i.produto.preco * i.quantidade, 0);
  }

  abrirCarrinho() {
    this.modalAberto = true;
    document.body.style.overflow = 'hidden';
  }

  fecharCarrinho() {
    this.modalAberto = false;
    this.checkoutAberto = false;
    document.body.style.overflow = 'auto';
  }

  abrirCheckout() {
    this.checkoutAberto = true;
  }

  fecharCheckout() {
    this.checkoutAberto = false;
  }

  trackById(_: number, p: Produto) {
    return p.id;
  }

  trackByItem(_: number, item: { produto: Produto; quantidade: number }) {
    return item.produto.id;
  }
}
