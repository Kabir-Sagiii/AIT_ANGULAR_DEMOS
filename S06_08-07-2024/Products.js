"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products = /** @class */ (function () {
    function Products() {
        this.productName = "Iphone 15";
        this.price = 89898;
    }
    Products.prototype.printDetails = function () {
        console.log(this.productName, this.price);
    };
    return Products;
}());
exports.default = Products;
