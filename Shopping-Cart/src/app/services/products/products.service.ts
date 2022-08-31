import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = 
     [
        new Product (1, 'product 1', `This is product 1`, 100,'/assets/images/products/black-bottle.jpg'),
        new Product (2, 'product 2', 'This is product 2', 150, '/assets/images/products/green-bottle.jpg'),
        new Product (3, 'product 3', 'This is product 3', 800, '/assets/images/products/multicolor-bottles.jpg'),
        new Product (4, 'product 4', 'This is product 4', 150, '/assets/images/products/silver-bottle-black-top.jpg'),
        new Product (5, 'product 5', 'This is product 5', 200, '/assets/images/products/white-bottle-wood.jpg'),
        new Product (6, 'product 6', 'This is product 6', 130, '/assets/images/products/white-bottle-glass.jpg'),
        new Product (7, 'product 7', 'This is product 7', 130, '/assets/images/products/white-bottle-silver-bottom.jpg'),
        new Product (8, 'product 8', 'This is product 8', 130, '/assets/images/products/wood-bottle-silver-top.jpg'),
        new Product (9, 'product 9', 'This is product 9', 130, '/assets/images/products/yellow-bottle.jpg'),
      ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
