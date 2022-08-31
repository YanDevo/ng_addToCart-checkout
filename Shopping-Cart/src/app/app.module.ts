import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProductListComponent } from './components/shop-page/product-list/product-list.component';
import { ListItemComponent } from './components/shop-page/product-list/list-item/list-item.component';
import { CartListComponent } from './components/shop-page/cart-list/cart-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CartItemComponent } from './components/shop-page/cart-list/cart-item/cart-item.component';
import { CartListService } from './components/shop-page/cart-list/cart-list-service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ShopPageComponent,
    ProductListComponent,
    ListItemComponent,
    CartListComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [CartListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
