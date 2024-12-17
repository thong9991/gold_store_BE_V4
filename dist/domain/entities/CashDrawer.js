"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashDrawerEntity = void 0;
class CashDrawerEntity {
    constructor(props) {
        this._drawerName = props.drawerName;
        this._drawerType = props.drawerType;
    }
    static create({ drawerName, drawerType, }) {
        return new CashDrawerEntity({
            drawerName: drawerName,
            drawerType: drawerType,
        });
    }
    static update(updatedCashDrawer) {
        return updatedCashDrawer;
    }
    get drawerName() {
        return this._drawerName;
    }
    get drawerType() {
        return this._drawerType;
    }
}
exports.CashDrawerEntity = CashDrawerEntity;
//# sourceMappingURL=CashDrawer.js.map