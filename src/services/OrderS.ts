import Order from "../models/Order";
import orders from "../data/OrderData";
import products from "../data/ProductData";
import  promptSync from 'prompt-sync';


//create order function
function createOrder(userName:string, productName: string, quantity: number): Order {
    const product = products.find(product => product.name === productName);
    if(!product) {
        throw new Error('Product not found');
    }
    if(product.quantity < quantity) {
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
function placeOrder(order: Order, userName: string = 'Guest') {
    console.log(`Order placed by ${userName} for ${order.productName} of quantity ${order.quantity} of price ${order.price}`);
}

// take order from user using prompt-sync dynamically
const prompt = promptSync();

function takeOrder() {
    const userName = prompt('Enter your name: ');
    const productName = prompt('Type the product name as iPhone, Samsung, OnePlus, Oppo, Realme or whatever you want: ');
    const quantity = +prompt('Enter no of product quantity you want to buy : ');
    
    try {
        const createdOrder = createOrder(userName, productName, quantity);
        placeOrder(createdOrder, userName);
    } catch (error) {
        //console.log can also be used. console.error is used to display error message in red color
        console.error(`Error processing order for user: ${userName}, product: ${productName}, quantity: ${quantity}. ${Error.prototype.toString.call(error)}`);
    }    
}

takeOrder();

//calling createOrder and placeOrder functions to display all order details
orders.forEach(order => {
    try {
        const createdOrder = createOrder(order.userName, order.productName, order.quantity);
        placeOrder(createdOrder, order.userName);
    } catch (error) {
        console.error(`Error processing order for user: ${order.userName}, product: ${order.productName}, quantity: ${order.quantity}. ${Error.prototype.toString.call(error)}`);
    }
});

