import { Component, OnInit } from '@angular/core';
import { CoffeeCartService } from '../coffee-cart.service';

@Component({
  selector: 'app-coffee-cart',
  templateUrl: './coffee-cart.component.html',
  styleUrls: ['./coffee-cart.component.scss']
})
export class CoffeeCartComponent implements OnInit {

  constructor(private coffee: CoffeeCartService) { }

  ngOnInit(): void {
  }

}
