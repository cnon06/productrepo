import { Product } from "./product";

export class SimpleDataSource 
{

    private products: Array<Product>;

    constructor ()
    {
        this.products = new Array <Product>
        (
            new Product(1,'Samsung S5','Phone', 1000),
            new Product(2,'Macbook','Laptop', 2000),
            new Product(3,'Logitech','Mouse', 100),
            new Product(4,'Lenovo','Tablet', 200),
        );


    }

   
    getProducts(): Product[]
    {
       return this.products;
    }


}