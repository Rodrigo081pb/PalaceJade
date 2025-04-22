import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappComponent } from "../../components/cards/whatsapp/whatsapp.component";
import { SistemaAgendamentoComponent } from "../../components/cards/sistema-agendamento/sistema-agendamento.component";
import { LandingPagesComponent } from "../../components/cards/landing-pages/landing-pages.component";
import { DesignComponent } from "../../components/cards/design/design.component";
import { CardapioFoodsComponent } from "../../components/cards/cardapio-foods/cardapio-foods.component";
import { OrcamentoComponent } from "../../components/cards/orcamento/orcamento.component";
import { LinkstreeComponent } from "../../components/cards/linkstree/linkstree.component";
import { ComercialComponent } from "../../components/comercial/comercial.component";
import { BotsTelegramComponent } from "../../components/cards/bots-telegram/bots-telegram.component";
import { CategoriasComponent } from '../../components/categorias/categorias.component';
import { LoveComponent } from "../../components/cards/love/love.component"; // Atenção aqui!
import { RouterModule } from '@angular/router';
import { ModalContatoComponent } from "../../components/modal-contato/modal-contato.component";
import { ModalIdeiaComponent } from "../../components/modal-ideia/modal-ideia.component";

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
    ModalContatoComponent,
    ModalIdeiaComponent
],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent {
  categoriaAtiva: string = '';

  modalIdeiasAberto: boolean = false;
  modalContatoAberto: boolean = false;

  filtrarCategoria(categoria: string) {
    this.categoriaAtiva = categoria;
  }

  verificarCategoria(categoria: string): boolean {
    return this.categoriaAtiva === categoria || this.categoriaAtiva === '';
  }

  abrirModalIdeias() {
    this.modalIdeiasAberto = true;
  }

  fecharModalIdeias() {
    this.modalIdeiasAberto = false;
  }

  abrirModalContato() {
    this.modalIdeiasAberto = false;
    this.modalContatoAberto = true;
  }

  fecharModalContato() {
    this.modalContatoAberto = false;
  }
}

