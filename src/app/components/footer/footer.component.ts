import { Component, ViewChild, ElementRef } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  @ViewChild('emailInput') emailInputRef!: ElementRef<HTMLInputElement>;

  enviarEmail(event: Event) {
    event.preventDefault();

    const emailInput = this.emailInputRef.nativeElement;
    const email = emailInput.value.trim();

    if (!email || !email.includes('@')) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    try {
      const assunto = encodeURIComponent('Contato via site');
      const corpo = encodeURIComponent(
        `Olá Hikaru,%0D%0A%0D%0AEstou entrando em contato através do site.%0D%0AMeu e-mail: ${email}%0D%0A%0D%0AAbraço!`
      );

      window.location.href = `mailto:hikarupalacejade@gmail.com?subject=${assunto}&body=${corpo}`;
      alert('Email aberto com sucesso!');
      emailInput.value = '';
      emailInput.placeholder = 'E-mail enviado!';

    } catch (error) {
      console.error('Erro ao tentar enviar o e-mail:', error);
      alert('Erro ao abrir o cliente de e-mail. Tente novamente mais tarde.');
    }
  }
}
