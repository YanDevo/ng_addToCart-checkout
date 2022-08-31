import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartListService } from '../../cart-list/cart-list-service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
    @Input()
    listItem?: Product;

  constructor(private cartListService: CartListService) { }

  ngOnInit(): void {
  }


  addToCart() {
    this.cartListService.addItemToCart(this.listItem);
  }

  viewDetails(){

  }
}
