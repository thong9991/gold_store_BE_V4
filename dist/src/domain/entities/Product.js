"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = void 0;
class ProductEntity {
    constructor(props) {
        this._productName = props.productName;
        this._category = props.category;
        this._goldPrice = props.goldPrice;
        this._totalWeight = props.totalWeight;
        this._goldWeight = props.goldWeight;
        this._gemWeight = props.gemWeight;
        this._wage = props.wage;
        this._vendor = props.vendor;
    }
    static create({ productName, category, goldPrice, totalWeight, goldWeight, gemWeight, wage, vendor, }) {
        return new ProductEntity({
            productName: productName,
            category: category,
            goldPrice: goldPrice,
            totalWeight: totalWeight,
            goldWeight: goldWeight,
            gemWeight: gemWeight,
            wage: wage,
            vendor: vendor,
        });
    }
    static update(updatedProduct) {
        return updatedProduct;
    }
    get productName() {
        return this._productName;
    }
    get category() {
        return this._category;
    }
    get goldPrice() {
        return this._goldPrice;
    }
    get totalWeight() {
        return this._totalWeight;
    }
    get goldWeight() {
        return this._goldWeight;
    }
    get gemWeight() {
        return this._gemWeight;
    }
    get wage() {
        return this._wage;
    }
    get vendor() {
        return this._vendor;
    }
}
exports.ProductEntity = ProductEntity;
//# sourceMappingURL=Product.js.map