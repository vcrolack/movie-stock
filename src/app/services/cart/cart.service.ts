import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Object[] = [];

  constructor() {
  }

  postData(cart: Object[]) {
    this.cart = cart;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
}
