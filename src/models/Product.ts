//Question : Place order for particular product and display the recipt of that order

interface Productstr {
    name: string;
    price: number;
    storage: string;
    quantity: number;
    rating: number;
}

class Product implements Productstr {
    name: string;
    price: number;
    storage: string;
    quantity: number;
    rating: number;

    constructor(name: string, price: number, storage: string, quantity: number, rating: number) {
        this.name = name;
        this.price = price;
        this.storage = storage;
        this.quantity = quantity;
        this.rating = rating;
    }
}

export default Product;