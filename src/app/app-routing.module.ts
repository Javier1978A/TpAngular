import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeeCompraComponent } from './coffee-compra/coffee-compra.component';
import { CoffeeContactComponent } from './coffee-contact/coffee-contact.component';
import { CoffeeListComponent } from './coffee-list/coffee-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'coffee', pathMatch: 'full' },
  { path: 'coffee', component: CoffeeCompraComponent },
  { path: 'about', component: CoffeeContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
