"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVendorUseCase = void 0;
const Vendor_1 = require("../../../../domain/entities/Vendor");
const ErrorType_1 = require("../../../../domain/enums/vendor/ErrorType");
class UpdateVendorUseCase {
    constructor(vendorRepository) {
        this.vendorRepository = vendorRepository;
    }
    async execute(vendorId, { vendorName, vendorCode, vendorAddress }) {
        try {
            const vendorExist = (await this.vendorRepository.findById(vendorId));
            if (!vendorExist) {
                return {
                    data: { error: ErrorType_1.VendorErrorType.VendorNotExist },
                    success: false,
                };
            }
            const vendorEntity = Vendor_1.VendorEntity.update({
                vendorName,
                vendorCode,
                vendorAddress,
            });
            const vendor = await this.vendorRepository.update(vendorExist, vendorEntity);
            return { data: vendor, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateVendorUseCase = UpdateVendorUseCase;
//# sourceMappingURL=UpdateVendor.js.map