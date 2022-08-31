import { NgModule } from '@angular/core';
import { Routes, RouterModule, } from '@angular/router';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { CartListComponent } from './components/shop-page/cart-list/cart-list.component';

const routes: Routes = [
  { path: 'cart', component: CartListComponent },
  { path: '', component: ShopPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]


})
export class AppRoutingModule { }
