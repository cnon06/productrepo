"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
var simpledatasource_1 = require("./simpledatasource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new simpledatasource_1.SimpleDataSource();
        this.producs = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.producs.push(p); });
    }
    ProductService.prototype.getByID = function (id) {
        return this.producs.filter(function (p) { return p.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.producs;
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateID();
            this.producs.push(product);
        }
        else {
            var index = this.producs.indexOf(product);
            this.producs.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.producs.indexOf(product);
        if (index > 0) {
            this.producs.splice(index, 1);
        }
    };
    ProductService.prototype.generateID = function () {
        var key = 1;
        while (this.getByID(key) != null) {
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
