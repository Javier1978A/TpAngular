import { Component, OnInit, } from '@angular/core';
import { CoffeeCartService } from '../coffee-cart.service';
import { Coffee } from './Coffee';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {


  coffeess: Coffee[] = [
    {
      id: 1,
      nombre: 'Macchiato',
      TipoDeCafe: 'leche finamente vaporizada y shots de Espresso Roast',
      precio: 150,
      image: 'assets/image/macchiato.jpg',
      stock: 15,
      oferta: false,
      cantidad: 0,
    },
    {
      id: 2,
      nombre: 'Capuccino',
      TipoDeCafe: '125 ml de leche y 25 ml de café expreso, cacao en polvo o canela',
      precio: 125,
      image: 'assets/image/capuccino.jpg',
      stock: 10,
      oferta: true,
      cantidad: 0,
    },
    {
      id: 3,
      nombre: 'Expresso',
      TipoDeCafe: '25 mililitros de bebida a partir de 7 gramos de café molido, con agua a 88°Ct',
      precio: 100,
      image: 'assets/image/espresso.jpg',
      stock: 20,
      oferta: false,
      cantidad: 0,
    },
    {
      id: 4,
      nombre: 'Caffe Latte',
      TipoDeCafe: 'una o dos dosis de expreso (1/3 de la bebida) y 2/3 de leche calentada con vapor',
      precio: 95,
      image: 'assets/image/latte.jpg',
      stock: 0,
      oferta: false,
      cantidad: 0,
    }

  ]


  constructor(private coffee: CoffeeCartService) { }

  ngOnInit(): void {
  }
  addToCart(coffee: any): void {
    this.coffee.addToCart(coffee)
    coffee.stock -= coffee.cantidad;
    coffee.cantidad = 0;
  }

}
