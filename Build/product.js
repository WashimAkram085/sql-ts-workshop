"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = addProduct;
const products = [
    {
        name: 'iPhone',
        price: 100000,
        quantity: 10,
        rating: 4.5
    },
    {
        name: 'Samsung',
        price: 70000,
        quantity: 15,
        rating: 4.0
    },
    {
        name: 'Mi',
        price: 30000,
        quantity: 20,
        rating: 3.2
    },
    {
        name: 'OnePlus',
        price: 50000,
        quantity: 5,
        rating: 3.8
    }
];
console.log(products);
function addProduct(name, price, quantity, rating) {
    const newProduct = { name, price, quantity, rating };
    products.push(newProduct);
    return `new product having ${name} added successfully`;
}
