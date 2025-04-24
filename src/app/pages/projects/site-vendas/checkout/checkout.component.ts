import {
  Component, Output, EventEmitter, HostListener
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../../../../services/cart.service';
import { ModalContatoComponent } from '../../../../components/modal-contato/modal-contato.component';
import { catchError, interval, of, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalContatoComponent],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  @Output() close = new EventEmitter<void>();

  firstName = '';
  lastName = '';
  email = '';
  cep = '';
  coupon = '';
  paymentMethod = '';
  installments = 1;
  cardName = '';
  cardNumber = '';
  bandeira = '';
  formaCartao = 'credito';
  installmentsOptions = Array.from({ length: 10 }, (_, i) => i + 1);

  endereco: any = {};
  loadingCep = false;
  qrUrl = '';
  discount = 0;
  shippingCost = 15;
  showConfirmation = false;
  trackingCode = '';
  remainingTime = '05:00';
  modalAberto = false;
  private timerSub?: Subscription;

  constructor(public cart: CartService, private http: HttpClient) {}

  @HostListener('document:keydown.escape')
  onEsc() {
    this.doClose();
  }

  doClose() {
    this.timerSub?.unsubscribe();
    this.close.emit();
  }

  fecharModal() {
    this.modalAberto = false;
  }

  applyCoupon() {
    if (this.coupon.trim().toUpperCase() === 'FRETEGRATIS') {
      this.shippingCost = 0;
      this.discount = this.cart.getTotal() * 0.1;
    }
  }

  onCepBlur() {
    const cep = this.cep.replace(/\D/g, '');
    if (cep.length !== 8) return;
    this.loadingCep = true;
    this.http.get<any>(`https://cep.awesomeapi.com.br/json/${cep}`)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        this.loadingCep = false;
        if (res?.address) this.endereco = res;
      });
  }

  onMethodChange() {
    if (this.paymentMethod === 'pix') {
      setTimeout(() => {
        const data = `Pagar R$${this.cart.getTotal().toFixed(2)}`;
        this.qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
        this.startTimer();
      }, 2000);
    }
  }

  startTimer(seconds = 300) {
    this.timerSub?.unsubscribe();
    this.timerSub = interval(1000).pipe(take(seconds + 1)).subscribe(elapsed => {
      const left = seconds - elapsed;
      const mm = Math.floor(left / 60);
      const ss = left % 60;
      this.remainingTime = `${mm}:${ss.toString().padStart(2, '0')}`;
    });
  }

  parcelValue() {
    const total = this.cart.getTotal() + this.shippingCost - this.discount;
    return total / (this.installments || 1); // evita divisão por zero
  }

  totalFinalNumber(): number {
    const total = this.cart.getTotal() + this.shippingCost - this.discount;
    return parseFloat(total.toFixed(2));
  }



  confirm() {
    this.trackingCode = Math.random().toString(36).substr(2, 8).toUpperCase();
    this.showConfirmation = true;
    this.timerSub?.unsubscribe();
    setTimeout(() => this.modalAberto = true, 2500);
  }

  totalFinal() {
    return this.totalFinalNumber().toFixed(2);
  }

}
