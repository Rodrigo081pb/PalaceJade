import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappComponent } from "../cards/whatsapp/whatsapp.component";
import { SistemaAgendamentoComponent } from "../cards/sistema-agendamento/sistema-agendamento.component";
import { LandingPagesComponent } from "../cards/landing-pages/landing-pages.component";
import { DesignComponent } from "../cards/design/design.component";
import { CardapioFoodsComponent } from "../cards/cardapio-foods/cardapio-foods.component";
import { OrcamentoComponent } from "../cards/orcamento/orcamento.component";
import { LinkstreeComponent } from "../cards/linkstree/linkstree.component";
import { ComercialComponent } from "../comercial/comercial.component";
import { BotsTelegramComponent } from "../cards/bots-telegram/bots-telegram.component";
import { CategoriasComponent } from '../categorias/categorias.component';
import { LoveComponent } from "../cards/love/love.component"; // Atenção aqui!
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    WhatsappComponent,
    SistemaAgendamentoComponent,
    LandingPagesComponent,
    DesignComponent,
    RouterModule,
    CardapioFoodsComponent,
    OrcamentoComponent,
    LinkstreeComponent,
    ComercialComponent,
    BotsTelegramComponent,
    CategoriasComponent,
    LoveComponent,
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  categoriaAtiva: string = '';

  filtrarCategoria(categoria: string) {
    this.categoriaAtiva = categoria;
  }

  verificarCategoria(categoria: string): boolean {
    return this.categoriaAtiva === categoria || this.categoriaAtiva === '';
  }
}
