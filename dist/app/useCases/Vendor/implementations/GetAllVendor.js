"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllVendorUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/vendor/ErrorType");
class GetAllVendorUseCase {
    constructor(vendorRepository) {
        this.vendorRepository = vendorRepository;
    }
    async execute(page) {
        try {
            if (page == -1) {
                const vendors = await this.vendorRepository.findAllDataNoPaging();
                return { data: vendors, success: true };
            }
            const vendors = await this.vendorRepository.findAll(page);
            if (vendors.total == 0) {
                return {
                    data: { error: ErrorType_1.VendorErrorType.VendorNotFound },
                    success: false,
                };
            }
            return { data: vendors, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllVendorUseCase = GetAllVendorUseCase;
//# sourceMappingURL=GetAllVendor.js.map