"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductData_1 = __importDefault(require("../data/ProductData"));
function addProduct(name, price, storage, quantity, rating) {
    const newProduct = { name, price, storage, quantity, rating };
    ProductData_1.default.push(newProduct);
    return `new product having name ${name} added successfully`;
}
const addProductResponse = addProduct('Realme', 15000, '64GB', 10, 3.5);
console.log(addProductResponse);
exports.default = ProductData_1.default;
