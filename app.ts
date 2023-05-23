import { Product } from "./product";
import { ProductService } from "./productservice";

let _productService = new ProductService();

let result;

// result = _productService.getProducts();
result = _productService.getByID(2);

console.log(result);

let p = new Product();

p.name = "IBM";
p.price = 2500;
p.category = "Computer";

_productService.saveProduct(p);

console.log(_productService.getProducts());

_productService.deleteProduct(result);

console.log(_productService.getProducts());

