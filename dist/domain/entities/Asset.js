"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetEntity = void 0;
class AssetEntity {
    constructor(props) {
        this._cashDrawer = props.cashDrawer;
        this._assetType = props.assetType;
        this._amount = props.amount;
    }
    static create({ cashDrawer, assetType, amount, }) {
        return new AssetEntity({
            cashDrawer: cashDrawer,
            assetType: assetType,
            amount: amount,
        });
    }
    static update(updatedAsset) {
        return updatedAsset;
    }
    get cashDrawer() {
        return this._cashDrawer;
    }
    get assetType() {
        return this._assetType;
    }
    get amount() {
        return this._amount;
    }
}
exports.AssetEntity = AssetEntity;
//# sourceMappingURL=Asset.js.map