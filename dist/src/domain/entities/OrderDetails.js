"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsEntity = void 0;
class OrderDetailsEntity {
    constructor(props) {
        this._staff = props.staff;
        this._orderExchanges = props.orderExchanges || [];
        this._orderSales = props.orderSales || [];
        this._total = props.total;
        this._goldToCash = props.goldToCash;
        this._discount = props.discount;
        this._isChecked = props.isChecked;
        this._description = props.description;
    }
    static create({ staff, orderExchanges, orderSales, total, goldToCash, discount, isChecked, description, }) {
        return new OrderDetailsEntity({
            staff: staff,
            total: total,
            orderExchanges: orderExchanges,
            orderSales: orderSales,
            goldToCash: goldToCash,
            discount: discount,
            isChecked: isChecked,
            description: description,
        });
    }
    static update(updatedOrderDetails) {
        return updatedOrderDetails;
    }
    get staff() {
        return this._staff;
    }
    get orderExchanges() {
        return this._orderExchanges;
    }
    get orderSales() {
        return this._orderSales;
    }
    get total() {
        return this._total;
    }
    get goldToCash() {
        return this._goldToCash;
    }
    get discount() {
        return this._discount;
    }
    get isChecked() {
        return this._isChecked;
    }
    get description() {
        return this._description;
    }
}
exports.OrderDetailsEntity = OrderDetailsEntity;
//# sourceMappingURL=OrderDetails.js.map