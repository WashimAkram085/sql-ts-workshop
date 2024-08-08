"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
// new product having Realme added successfully
const addProductResponse = (0, product_1.addProduct)('Realme', 15000, '64GB', 10, 3.5);
console.log(addProductResponse);
//console.log(products);
