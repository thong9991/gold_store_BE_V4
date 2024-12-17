"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldPriceEntity = void 0;
class GoldPriceEntity {
    constructor(props) {
        this._goldType = props.goldType;
        this._askPrice = props.askPrice;
        this._bidPrice = props.bidPrice;
    }
    static create({ goldType, askPrice, bidPrice, }) {
        return new GoldPriceEntity({
            goldType: goldType,
            askPrice: askPrice,
            bidPrice: bidPrice,
        });
    }
    static update(updatedGoldPrice) {
        return updatedGoldPrice;
    }
    get goldType() {
        return this._goldType;
    }
    get askPrice() {
        return this._askPrice;
    }
    get bidPrice() {
        return this._bidPrice;
    }
}
exports.GoldPriceEntity = GoldPriceEntity;
//# sourceMappingURL=GoldPrice.js.map