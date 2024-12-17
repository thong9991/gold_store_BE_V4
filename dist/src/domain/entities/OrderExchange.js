"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderExchangeEntity = void 0;
class OrderExchangeEntity {
    constructor(props) {
        this._goldPrice = props.goldPrice;
        this._amount = props.amount;
    }
    static create({ goldPrice, amount, }) {
        return new OrderExchangeEntity({
            goldPrice: goldPrice,
            amount: amount,
        });
    }
    static update(updatedOrderExchange) {
        return updatedOrderExchange;
    }
    get goldPrice() {
        return this._goldPrice;
    }
    get amount() {
        return this._amount;
    }
}
exports.OrderExchangeEntity = OrderExchangeEntity;
//# sourceMappingURL=OrderExchange.js.map