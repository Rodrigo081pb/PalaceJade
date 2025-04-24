import { Injectable } from '@angular/core';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  qty: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  private items: CartItem[] = [];

  getItems(): CartItem[] {
    return this.items;
  }

  getCount(): number {
    return this.items.reduce((sum, i) => sum + i.qty, 0);
  }

  getTotal(): number {
    return this.items.reduce((sum, i) => sum + i.qty * i.price, 0);
  }

  addItem(item: Omit<CartItem, 'qty'>, qty = 1) {
    const ex = this.items.find(i => i.id === item.id);
    if (ex) ex.qty += qty;
    else this.items.push({ ...item, qty });
  }

  updateQty(id: number, qty: number) {
    const it = this.items.find(i => i.id === id);
    if (it) it.qty = qty;
  }

  removeItem(id: number) {
    this.items = this.items.filter(i => i.id !== id);
  }

  clear() {
    this.items = [];
  }
}
