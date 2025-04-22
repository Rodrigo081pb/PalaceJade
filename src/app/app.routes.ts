import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  // Categorias
  {
    path: 'categoria/whatsapp',
    loadComponent: () =>
      import('./pages/categoria/whatsapp/whatsapp.component').then(m => m.WhatsappComponent)
  },
  {
    path: 'categoria/agendamento',
    loadComponent: () =>
      import('./pages/categoria/sistema-agendamento/sistema-agendamento.component').then(m => m.SistemaAgendamentoComponent)
  },
  {
    path: 'categoria/lojas',
    loadComponent: () =>
      import('./pages/categoria/lojas-virtuais/lojas-virtuais.component').then(m => m.LojasVirtuaisComponent)
  },
  {
    path: 'categoria/design',
    loadComponent: () =>
      import('./pages/categoria/design/design.component').then(m => m.DesignComponent)
  },
  {
    path: 'categoria/cardapio',
    loadComponent: () =>
      import('./pages/categoria/cardapio-digital/cardapio-digital.component').then(m => m.CardapioDigitalComponent)
  },
  {
    path: 'categoria/link',
    loadComponent: () =>
      import('./pages/categoria/linktree/linktree.component').then(m => m.LinktreeComponent)
  },
  {
    path: 'categoria/bots',
    loadComponent: () =>
      import('./pages/categoria/bots-telegram/bots-telegram.component').then(m => m.BotsTelegramComponent)
  },
  {
    path: 'categoria/love',
    loadComponent: () =>
      import('./pages/categoria/love/love.component').then(m => m.LoveComponent)
  },
];
