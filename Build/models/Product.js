"use strict";
//Question : Place order for particular product and display the recipt of that order
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price, storage, quantity, rating) {
        this.name = name;
        this.price = price;
        this.storage = storage;
        this.quantity = quantity;
        this.rating = rating;
    }
}
exports.default = Product;
