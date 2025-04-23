import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

interface Servico {
  valor: string;
  label: string;
}

@Component({
  selector: 'app-agendamento-inteligente',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './agendamento-inteligente.component.html',
  styleUrls: ['./agendamento-inteligente.component.css']
})
export class AgendamentoInteligenteComponent implements OnChanges {
  @Input() aberto = false;
  @Input() servicoSelecionado!: Servico;
  @Output() fechar = new EventEmitter<void>();

  servicos: Servico[] = [
    { valor: 'salao', label: 'Agendamento para Salões' },
    { valor: 'consulta', label: 'Consultas Médicas ou Terapias' },
    { valor: 'aula', label: 'Aulas, Mentorias ou Coaching' },
    { valor: 'fotos', label: 'Sessões de Fotos' },
    { valor: 'evento', label: 'Eventos e RSVP' },
    { valor: 'freela', label: 'Agendamento para Freelancers' }
  ];

  // modelo de formulário
  dados = {
    nome: '',
    telefone: '',
    data: '',
    hora: '',
    servico: ''
  };

  confirmacao: boolean = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['aberto'] && this.aberto) {
      // sempre reseta ao abrir
      this.dados = {
        nome: '',
        telefone: '',
        data: '',
        hora: '',
        servico: this.servicoSelecionado?.valor || ''
      };
      this.confirmacao = false;
    }
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.confirmacao = true;
    }
  }

  fecharModal() {
    this.fechar.emit();
  }
}
