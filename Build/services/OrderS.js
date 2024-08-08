"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const OrderData_1 = __importDefault(require("../data/OrderData"));
const ProductData_1 = __importDefault(require("../data/ProductData"));
const prompt_sync_1 = __importDefault(require("prompt-sync"));
//create order function
function createOrder(userName, productName, quantity) {
    const product = ProductData_1.default.find(product => product.name === productName);
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
// take order from user using prompt-sync dynamically
const prompt = (0, prompt_sync_1.default)();
function takeOrder() {
    const userName = prompt('Enter your name: ');
    const productName = prompt('Type the product name as iPhone, Samsung, OnePlus, Oppo, Realme or whatever you want: ');
    const quantity = +prompt('Enter no of product quantity you want to buy : ');
    try {
        const createdOrder = createOrder(userName, productName, quantity);
        placeOrder(createdOrder, userName);
    }
    catch (error) {
        //console.log can also be used. console.error is used to display error message in red color
        console.error(`Error processing order for user: ${userName}, product: ${productName}, quantity: ${quantity}. ${Error.prototype.toString.call(error)}`);
    }
}
takeOrder();
//calling createOrder and placeOrder functions to display all order details
OrderData_1.default.forEach(order => {
    try {
        const createdOrder = createOrder(order.userName, order.productName, order.quantity);
        placeOrder(createdOrder, order.userName);
    }
    catch (error) {
        console.error(`Error processing order for user: ${order.userName}, product: ${order.productName}, quantity: ${order.quantity}. ${Error.prototype.toString.call(error)}`);
    }
});
