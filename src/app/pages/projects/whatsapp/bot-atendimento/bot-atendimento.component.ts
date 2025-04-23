import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface QuickReply {
  label: string;
  value: string;
  icon?: string;
}

interface ChatMessage {
  text?: string;
  user: 'user' | 'bot';
  quickReplies?: QuickReply[];
  timestamp?: string;
}

@Component({
  selector: 'app-bot-atendimento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bot-atendimento.component.html',
  styleUrls: ['./bot-atendimento.component.css']
})
export class BotAtendimentoComponent implements OnChanges {
  @Input() aberto = false;
  @Output() fechar = new EventEmitter<void>();
  @Output() abrirContato = new EventEmitter<void>();
  @ViewChild('chatContainer') chatContainer!: ElementRef;

  mensagens: ChatMessage[] = [];
  mensagemAtual = '';
  timeoutHandle: any;

  // Variações de saudação
  private saudacoes = [
    'E aí! Tudo bem por aí? 😊',
    'Oi! Como está seu dia hoje?',
    'Olá! Espero que você esteja tendo um ótimo dia!'
  ];

  ngOnChanges() {
    if (this.aberto) {
      this.mensagens = [];
      clearTimeout(this.timeoutHandle);
      setTimeout(() => this.boasVindas(), 0);
    }
  }

  private boasVindas() {
    const intro = [
      '👋 Olá e seja muito bem-vindo(a) à Hikaruz!',
      this.randomItem(this.saudacoes),
      'Eu sou o Aurora, sua assistente virtual. Vamos conversar sobre como nossos chatbots podem transformar seu negócio.'
    ];
    this.adicionarBot(intro, () => this.exibirMenuComDigitar());
    this.definirTimeout();
  }

  private exibirMenuComDigitar() {
    this.adicionarBot(
      ['Como posso te ajudar hoje? Selecione uma das opções abaixo:'],
      () => this.mostrarMenu()
    );
  }

  private mostrarMenu() {
    this.adicionarMensagem({
      user: 'bot',
      quickReplies: [
        { label: '🤖 Bot Inteligente', value: 'fluxo1', icon: 'fa-robot' },
        { label: '🛒 Sistema de Pedidos', value: 'fluxo2', icon: 'fa-store' },
        { label: '📅 Agendamento', value: 'fluxo3', icon: 'fa-calendar-check' },
        { label: '💸 Cobrança via Pix', value: 'fluxo4', icon: 'fa-hand-holding-usd' }
      ],
      timestamp: this.horaAtual()
    });
  }

  onQuickReply(qr: QuickReply) {
    this.adicionarMensagem({ user: 'user', text: qr.label, timestamp: this.horaAtual() });
    clearTimeout(this.timeoutHandle);

    switch (qr.value) {
      case 'fluxo1':
      case 'fluxo2':
      case 'fluxo3':
      case 'fluxo4':
        this.processarFluxo(qr.value);
        break;
      case 'duvida':
        this.redirecionarContato();
        break;
      case 'nenhuma':
        this.perguntarAlgoMais();
        break;
      case 'reiniciar':
        this.exibirMenuComDigitar();
        break;
      case 'finalizar':
        this.encerrar();
        break;
      default:
        this.exibirMenuComDigitar();
    }
  }

  enviarMensagem() {
    const txt = this.mensagemAtual.trim();
    if (!txt) return;
    this.adicionarMensagem({ user: 'user', text: txt, timestamp: this.horaAtual() });
    this.mensagemAtual = '';
    clearTimeout(this.timeoutHandle);

    if (/^(oi|olá|e aí|tudo bem)/i.test(txt)) {
      this.adicionarBot([this.randomItem(this.saudacoes)], () => this.exibirMenuComDigitar());
    } else {
      this.adicionarBot(
        [
          'Desculpe, não entendi bem. 😉',
          'Por favor, selecione uma das opções abaixo ou me fale melhor.'
        ],
        () => this.exibirMenuComDigitar()
      );
    }

    this.definirTimeout();
  }

  private processarFluxo(etapa: string) {
    const servicos: Record<string, { nome: string; aplicacoes: string; beneficio: string }> = {
      fluxo1: {
        nome: 'Bot Inteligente',
        aplicacoes: 'e-commerces, clínicas, imobiliárias e startups de educação',
        beneficio: 'engajar seus clientes 24/7, reduzir tempo de resposta e direcionar leads qualificados'
      },
      fluxo2: {
        nome: 'Sistema de Pedidos via Chat',
        aplicacoes: 'restaurantes, lojas virtuais e serviços de entrega',
        beneficio: 'aumentar conversões e diminuir abandono de carrinho'
      },
      fluxo3: {
        nome: 'Agendamento Automático',
        aplicacoes: 'salões, consultórios e academias',
        beneficio: 'reduzir faltas e otimizar a gestão de agenda'
      },
      fluxo4: {
        nome: 'Cobrança via Pix',
        aplicacoes: 'freelancers, microempreendedores e e-commerces',
        beneficio: 'acelerar recebimentos e oferecer excelente experiência ao cliente'
      }
    };

    const info = servicos[etapa];
    const respostas = [
      `🎯 **${info.nome} Hikaruz**: uma solução completa para sua empresa.`,
      `💡 Aplicações: ${info.aplicacoes}.`,
      `🚀 Benefícios: ${info.beneficio}.`
    ];

    this.adicionarBot(respostas, () => this.perguntarAplicavel(info));
    this.definirTimeout();
  }

  private perguntarAplicavel(info: { nome: string; aplicacoes: string; beneficio: string }) {
    const pergunta = `Nós da Hikaruz fazemos **${info.nome}** para ${info.beneficio}. Isso se aplica ao seu negócio?`;
    this.adicionarBot([pergunta], () => {
      this.adicionarMensagem({
        user: 'bot',
        quickReplies: [
          { label: 'Sim, tenho interesse', value: 'duvida' },
          { label: 'Não, obrigado(a)', value: 'nenhuma' }
        ],
        timestamp: this.horaAtual()
      });
    });
  }

  private perguntarAlgoMais() {
    this.adicionarBot(['Entendi. Deseja saber mais sobre outra solução da Hikaruz?'], () => {
      this.adicionarMensagem({
        user: 'bot',
        quickReplies: [
          { label: 'Sim, mostre novamente', value: 'reiniciar' },
          { label: 'Não, estou satisfeito(a)', value: 'finalizar' }
        ],
        timestamp: this.horaAtual()
      });
    });
  }

  private redirecionarContato() {
    this.adicionarBot(
      [
        'Perfeito! Estamos te redirecionando ao nosso canal de contato.',
        'Aguarde um instante enquanto abro o modal de contato para você falar com um especialista. 🤝'
      ],
      () => this.abrirContato.emit()
    );
  }

  private adicionarBot(textos: string[], callback?: () => void) {
    const typing: ChatMessage = { user: 'bot', text: 'digitando…', timestamp: this.horaAtual() };
    this.adicionarMensagem(typing);

    textos.forEach((t, i) => {
      const delay = this.calcularDelay(t);
      setTimeout(() => {
        this.mensagens = this.mensagens.filter(m => m.text !== 'digitando…');
        this.adicionarMensagem({ user: 'bot', text: t, timestamp: this.horaAtual() });
        if (i === textos.length - 1 && callback) callback();
      }, delay + i * 300);
    });
  }

  private adicionarMensagem(msg: ChatMessage) {
    this.mensagens.push(msg);
    setTimeout(() => this.scrollChat(), 50);
  }

  private definirTimeout() {
    this.timeoutHandle = setTimeout(() => this.encerrar(), 120000);
  }

  private encerrar() {
    this.adicionarBot(['✅ Foi ótimo ajudar! Qualquer coisa, só chamar. Até logo! 👋'], () => this.fechar.emit());
  }

  private scrollChat() {
    const el = this.chatContainer?.nativeElement;
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }

  private calcularDelay(texto: string): number {
    const palavras = texto.split(' ').length;
    return palavras * (150 + Math.random() * 150);
  }

  private randomItem(arr: string[]): string {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private horaAtual(): string {
    const d = new Date();
    return `${d.getHours().toString().padStart(2, '0')}:${d
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  }

  fecharBot() {
    clearTimeout(this.timeoutHandle);
    this.fechar.emit();
  }
}
