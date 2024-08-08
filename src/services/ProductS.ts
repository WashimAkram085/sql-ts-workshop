import Product from "../models/Product";
import products from "../data/ProductData";

function addProduct(name: string, price: number,storage:string, quantity: number, rating: number) {
    const newProduct: Product = { name, price, storage, quantity, rating };
    products.push(newProduct);
    
    return `new product having name ${name} added successfully`;
}

const addProductResponse = addProduct('Realme', 15000, '64GB', 10, 3.5);
console.log(addProductResponse);

export default products;