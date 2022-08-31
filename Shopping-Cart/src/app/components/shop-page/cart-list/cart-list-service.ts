import { Injectable } from "@angular/core";
import { Product } from "src/app/models/product";

@Injectable({
    providedIn: "root"
})
export class CartListService {

    currentCartItems: Product[] = [];



    getData(): Product[]{
        return this.currentCartItems
    }

    addItemToCart(product: Product | undefined){
        if (product !== null && product !== undefined) {
         this.currentCartItems.push(product)
        }
    }
}

