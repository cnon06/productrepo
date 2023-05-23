"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleDataSource = void 0;
var product_1 = require("./product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new product_1.Product(1, 'Samsung S5', 'Phone', 1000), new product_1.Product(2, 'Macbook', 'Laptop', 2000), new product_1.Product(3, 'Logitech', 'Mouse', 100), new product_1.Product(4, 'Lenovo', 'Tablet', 200));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
