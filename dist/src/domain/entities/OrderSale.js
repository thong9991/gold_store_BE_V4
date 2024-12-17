"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSaleEntity = void 0;
class OrderSaleEntity {
    constructor(props) {
        this._product = props.product;
        this._cutAmount = props.cutAmount;
        this._newWage = props.newWage;
    }
    static create({ product, cutAmount, newWage, }) {
        return new OrderSaleEntity({
            product: product,
            cutAmount: cutAmount,
            newWage: newWage,
        });
    }
    static update(updatedOrderSale) {
        return updatedOrderSale;
    }
    get product() {
        return this._product;
    }
    get cutAmount() {
        return this._cutAmount;
    }
    get newWage() {
        return this._newWage;
    }
}
exports.OrderSaleEntity = OrderSaleEntity;
//# sourceMappingURL=OrderSale.js.map