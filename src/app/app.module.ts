import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoffeeContactComponent } from './coffee-contact/coffee-contact.component';
import { CoffeeCompraComponent } from './coffee-compra/coffee-compra.component';
import { CoffeeCartComponent } from './coffee-cart/coffee-cart.component';
import { InputNumberComponent } from './input-number/input-number.component'

@NgModule({
  declarations: [
    AppComponent,
    CoffeeListComponent,
    CoffeeListComponent,
    CoffeeContactComponent,
    CoffeeCompraComponent,
    CoffeeCartComponent,
    InputNumberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
