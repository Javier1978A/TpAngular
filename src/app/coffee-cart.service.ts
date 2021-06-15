import { Injectable } from '@angular/core';
import { Coffee } from './coffee-list/Coffee';

@Injectable({
  providedIn: 'root'
})
export class CoffeeCartService {

  cartList: Coffee[] = [];

  constructor() { }

  addToCart(coffee: Coffee) {
    let item: Coffee = this.cartList.find((v1) => v1.nombre === coffee.nombre)
    if (!item) {
      this.cartList.push({ ...coffee })
    } else {
      item.cantidad += coffee.cantidad
    }

  }
}
