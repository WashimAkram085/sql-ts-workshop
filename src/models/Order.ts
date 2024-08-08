interface Orderstr {
    userName : string;
    productName: string;
    quantity: number;
    price: number;
}
class Order implements Orderstr {
    userName: string;
    productName: string;
    quantity: number;
    price: number;

    constructor(userName: string, productName: string, quantity: number, price: number) {
        this.userName = userName;
        this.productName = productName;
        this.quantity = quantity;
        this.price = price;
    }
}
export default Order;