"use strict";
exports.__esModule = true;
exports.Product = exports.Products = void 0;
var Products = /** @class */ (function () {
    function Products() {
        this.product = [new Product("Bag", "Gucci", 10000), new Product("jeans", "H&M", 2000)];
    }
    Products.prototype.printAllProduct = function () {
        for (var _i = 0, _a = this.product; _i < _a.length; _i++) {
            var p = _a[_i];
            console.log(p);
        }
    };
    return Products;
}());
exports.Products = Products;
var Product = /** @class */ (function () {
    function Product(name, brand, cost) {
        this.name = name;
        this.brand = brand;
        this.cost = cost;
    }
    return Product;
}());
exports.Product = Product;
var p = new Products();
p.printAllProduct();
