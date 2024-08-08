"use strict";
//Question : Place order for particular product and display the recipt of that order
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProduct = addProduct;
const products = [
    {
        name: 'iPhone',
        price: 100000,
        storage: '256GB',
        quantity: 10,
        rating: 4.5
    },
    {
        name: 'Samsung',
        price: 70000,
        storage: '128GB',
        quantity: 15,
        rating: 4.0
    },
    {
        name: 'Mi',
        price: 30000,
        storage: '64GB',
        quantity: 20,
        rating: 3.2
    },
    {
        name: 'OnePlus',
        price: 50000,
        storage: '128GB',
        quantity: 5,
        rating: 3.8
    }
];
console.log(products);
function addProduct(name, price, storage, quantity, rating) {
    const newProduct = { name, price, storage, quantity, rating };
    products.push(newProduct);
    return `new product having name ${name} added successfully`;
}
exports.default = products;
