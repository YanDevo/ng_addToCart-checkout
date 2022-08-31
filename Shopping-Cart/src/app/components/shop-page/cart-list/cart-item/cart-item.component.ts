import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartListService } from '../cart-list-service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input()
  cartItem: any = []
  length: number = 0
  
  
  constructor(private cartListService : CartListService){
  }

  ngOnInit(): void {
    
        
  }

  itemTot(){
    return this.cartListService.currentCartItems.length;
  }

}
