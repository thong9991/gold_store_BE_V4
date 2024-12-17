"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVendorUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/vendor/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/vendor/SuccessType");
class DeleteVendorUseCase {
    constructor(vendorRepository, productRepository) {
        this.vendorRepository = vendorRepository;
        this.productRepository = productRepository;
    }
    async execute(vendorId) {
        try {
            const vendorExist = (await this.vendorRepository.findById(vendorId));
            if (!vendorExist) {
                return {
                    data: { error: ErrorType_1.VendorErrorType.VendorNotExist },
                    success: false,
                };
            }
            const productExist = await this.productRepository.findByVendorId(vendorId);
            if (productExist) {
                return {
                    data: { error: ErrorType_1.VendorErrorType.ProductConstraint },
                    success: false,
                };
            }
            await this.vendorRepository.delete(vendorId);
            return { data: { msg: SuccessType_1.VendorSuccessType.VendorDeleted }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteVendorUseCase = DeleteVendorUseCase;
//# sourceMappingURL=DeleteVendor.js.map