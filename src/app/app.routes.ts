// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LojaCatalogoComponent } from './pages/projects/site-vendas/loja-catalogo/loja-catalogo.component';
import { LojaCarrinhoComponent } from './pages/projects/site-vendas/loja-carrinho/loja-carrinho.component';
import { CheckoutComponent } from './pages/projects/site-vendas/checkout/checkout.component';
import { LojaInfoprodutoComponent } from './pages/projects/site-vendas/loja-infoproduto/loja-infoproduto.component';
import { Component } from '@angular/core';
import { LandingPageComponent } from './pages/projects/site-vendas/landing-page/landing-page.component';
import { RestauranteCompletoComponent } from './pages/projects/cardapio/restaurante-completo/restaurante-completo.component';
import { PedidoComponent } from './pages/projects/love/pedido/pedido.component';
import { PolaroidMusicComponent } from './pages/projects/love/polaroid/polaroid.component';

export const routes: Routes = [
  // rota inicial e home
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },

  // rotas lazy-loaded para cada categoria
  {
    path: 'categoria/whatsapp',
    loadComponent: () =>
      import('./pages/categoria/whatsapp/whatsapp.component')
        .then(m => m.WhatsappComponent)
  },
  {
    path: 'categoria/agendamento',
    loadComponent: () =>
      import('./pages/categoria/sistema-agendamento/sistema-agendamento.component')
        .then(m => m.SistemaAgendamentoComponent)
  },
  {
    path: 'categoria/lojas',
    loadComponent: () =>
      import('./pages/categoria/lojas-virtuais/lojas-virtuais.component')
        .then(m => m.LojasVirtuaisComponent)
  },
  {
    path: 'categoria/design',
    loadComponent: () =>
      import('./pages/categoria/design/design.component')
        .then(m => m.DesignComponent)
  },
  {
    path: 'categoria/cardapio',
    loadComponent: () =>
      import('./pages/categoria/cardapio-digital/cardapio-digital.component')
        .then(m => m.CardapioDigitalComponent)
  },
  {
    path: 'categoria/link',
    loadComponent: () =>
      import('./pages/categoria/linktree/linktree.component')
        .then(m => m.LinktreeComponent)
  },
  {
    path: 'categoria/bots',
    loadComponent: () =>
      import('./pages/categoria/bots-telegram/bots-telegram.component')
        .then(m => m.BotsTelegramComponent)
  },
  {
    path: 'categoria/love',
    loadComponent: () =>
      import('./pages/categoria/love/love.component')
        .then(m => m.LoveComponent)
  },

  // sub-projetos da categoria "Lojas Virtuais"
  { path: 'loja-catalogo', component: LojaCatalogoComponent },
  { path: 'loja-carrinho', component: LojaCarrinhoComponent },
  { path: 'checkout',      component: CheckoutComponent },
  { path: 'loja-infoprodutos', component: LojaInfoprodutoComponent },
  { path: 'landing-page', component: LandingPageComponent},

  // Cardapio
  { path: 'restaurante-completo', component: RestauranteCompletoComponent},

  // Love
  { path: 'pedido', component: PedidoComponent},
  { path: 'polaroid', component: PolaroidMusicComponent},
  // rota curinga: redireciona para a home
  { path: '**', redirectTo: '' }
];
