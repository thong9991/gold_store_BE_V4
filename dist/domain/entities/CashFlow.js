"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlowEntity = void 0;
class CashFlowEntity {
    constructor(props) {
        this._asset = props.asset;
        this._amount = props.amount;
    }
    static create({ asset, amount }) {
        return new CashFlowEntity({
            asset: asset,
            amount: amount,
        });
    }
    static update(updatedCashFlow) {
        return updatedCashFlow;
    }
    get asset() {
        return this._asset;
    }
    get amount() {
        return this._amount;
    }
}
exports.CashFlowEntity = CashFlowEntity;
//# sourceMappingURL=CashFlow.js.map