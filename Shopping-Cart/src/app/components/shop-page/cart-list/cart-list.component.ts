import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartListService } from './cart-list-service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartList: Product[] = [];

  constructor(private cartListService: CartListService) { 
    this.cartList = this.cartListService.getData();

  }

  ngOnInit(): void {

  }
  getTotal(){
    return this.cartList.map((item) => {
      return item.price;
    }).reduce((total, price) => {
      return total+price
    })
  }
  
}
