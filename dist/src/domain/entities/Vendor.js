"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorEntity = void 0;
class VendorEntity {
    constructor(props) {
        this._vendorName = props.vendorName;
        this._vendorCode = props.vendorCode;
        this._vendorAddress = props.vendorAddress;
    }
    static create({ vendorName, vendorCode, vendorAddress, }) {
        return new VendorEntity({
            vendorName: vendorName,
            vendorCode: vendorCode,
            vendorAddress: vendorAddress,
        });
    }
    static update(updatedVendor) {
        return updatedVendor;
    }
    get vendorName() {
        return this._vendorName;
    }
    get vendorCode() {
        return this._vendorCode;
    }
    get vendorAddress() {
        return this._vendorAddress;
    }
}
exports.VendorEntity = VendorEntity;
//# sourceMappingURL=Vendor.js.map