import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Coffee } from '../coffee-list/Coffee';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent implements OnInit {
  controlCantidad!: FormControl;
  constructor() {

  }
  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output() cantidadChange: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    console.log(this.max, this.cantidad)
    this.controlCantidad = new FormControl(this.cantidad)
  }
  upcantidad(): void {
    /* if (!this.cantidad) {
      throw new Error('el cafe no puede ser null')
    } */

    if (this.cantidad < this.max) {
      this.cantidad++
      console.log(this.cantidad)
      this.cantidadChange.emit(this.cantidad)
    }
  }
  downcantidad(): void {
    /* if (!this.cantidad) {
      return
    } */
    if (this.cantidad > 0)
      this.cantidad--
  }
}
