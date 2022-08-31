export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    qty: number;

    constructor(id: number = 0, 
                name: string = 'Product name goes here', 
                description: string = 'Product escription goes here', 
                price: number = 0, 
                imageUrl: string = 'https://images.unsplash.com/photo-1619020986176-50be596d0c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', 
                qty: number = 0, ) {
                    
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imageUrl = imageUrl;
        this.qty = qty;
    }

}
