import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalContatoComponent } from '../../../../components/modal-contato/modal-contato.component';

@Component({
  selector: 'app-restaurante-completo',
  standalone: true,
  imports: [CommonModule, ModalContatoComponent],
  templateUrl: './restaurante-completo.component.html',
  styleUrls: ['./restaurante-completo.component.css']
})
export class RestauranteCompletoComponent {
  pedido: any[] = [];
  mostrarResumo = false;
  modalAberto = false;

  secoes = [
    {
      titulo: '🍕 Pizzas',
      itens: [
        { nome: 'Calabresa com Catupiry', desc: 'Calabresa artesanal com borda recheada', preco: 39 },
        { nome: 'Margherita', desc: 'Tradicional com manjericão e molho fresco', preco: 36 },
      ]
    },
    {
      titulo: '🍔 Hamburgueres',
      itens: [
        { nome: 'Smash Clássico', desc: 'Carne prensada, cheddar e maionese da casa', preco: 28 },
        { nome: 'Double Bacon', desc: 'Duas carnes, bacon crocante e cheddar', preco: 33 },
      ]
    },
    {
      titulo: '🍛 Pratos Quentes',
      itens: [
        { nome: 'Feijoada Premium', desc: 'Acompanhado de arroz, couve e farofa', preco: 45 },
        { nome: 'Yakissoba Misto', desc: 'Carne e frango com legumes no shoyu', preco: 32 },
      ]
    },
    {
      titulo: '🥤 Bebidas',
      itens: [
        { nome: 'Refrigerante lata', desc: 'Coca-Cola, Guaraná, Fanta etc', preco: 6 },
        { nome: 'Caipirinha Tradicional', desc: 'Limão, açúcar e cachaça', preco: 15 },
      ]
    },
    {
      titulo: '🍨 Sobremesas',
      itens: [
        { nome: 'Petit Gâteau', desc: 'Bolo quente com sorvete de creme', preco: 18 },
        { nome: 'Brownie c/ Nutella', desc: 'Brownie caseiro com calda', preco: 14 },
      ]
    }
  ];

  add(item: any) {
    const i = this.pedido.find(p => p.nome === item.nome);
    if (i) i.qtd++;
    else this.pedido.push({ ...item, qtd: 1 });
  }

  total() {
    return this.pedido.reduce((acc, item) => acc + item.preco * item.qtd, 0);
  }

  enviarWhats() {
    const texto = encodeURIComponent(
      this.pedido.map(p => `• ${p.nome} x${p.qtd} - R$ ${(p.qtd * p.preco).toFixed(2)}`).join('\n') +
      `\n\nTotal: R$ ${this.total().toFixed(2)}\nFrete grátis!`
    );
    window.open(`https://wa.me/5581984423591?text=${texto}`, '_blank');
    this.modalAberto = true;
  }

  fecharModal() {
    this.modalAberto = false;
    this.pedido = [];
    this.mostrarResumo = false;
  }
}
