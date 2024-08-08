"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importStar(require("./product"));
// new product having Realme added successfully
const addProductResponse = (0, product_1.addProduct)('Realme', 15000, '64GB', 10, 3.5);
console.log(addProductResponse);
//create order function
function createOrder(userName, productName, quantity) {
    const product = product_1.default.find(product => product.name === productName);
    if (!product) {
        throw new Error('Product not found');
    }
    if (product.quantity < quantity) {
        throw new Error('Product out of stock');
    }
    product.quantity -= quantity;
    return {
        userName,
        productName,
        quantity,
        price: product.price * quantity
    };
}
//place order function to display order details
function placeOrder(order, userName = 'Guest') {
    console.log(`Order placed by ${userName} for ${order.productName} of quantity ${order.quantity} of price ${order.price}`);
}
//Orders created
const orders = [
    { userName: 'Washim', productName: 'iPhone', quantity: 3 },
    { userName: 'Roshni', productName: 'Samsung', quantity: 5 },
    { userName: 'Abhishek', productName: 'OnePlus', quantity: 7 },
    { userName: 'Nagendra', productName: 'Oppo', quantity: 2 }
];
//calling createOrder and placeOrder functions to display all order details
orders.forEach(order => {
    try {
        const createdOrder = createOrder(order.userName, order.productName, order.quantity);
        placeOrder(createdOrder, order.userName);
    }
    catch (error) {
        console.error(Error);
    }
});
