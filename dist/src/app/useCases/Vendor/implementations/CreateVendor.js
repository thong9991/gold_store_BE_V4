"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVendorUseCase = void 0;
const Vendor_1 = require("../../../../domain/entities/Vendor");
const ErrorType_1 = require("../../../../domain/enums/vendor/ErrorType");
class CreateVendorUseCase {
    constructor(vendorRepository) {
        this.vendorRepository = vendorRepository;
    }
    async execute({ vendorName, vendorCode, vendorAddress, }) {
        try {
            const vendorEntity = Vendor_1.VendorEntity.create({
                vendorName,
                vendorCode,
                vendorAddress,
            });
            const vendorExist = (await this.vendorRepository.findByVendorName(vendorName));
            if (vendorExist) {
                return {
                    data: { error: ErrorType_1.VendorErrorType.VendorAlreadyExists },
                    success: false,
                };
            }
            const vendor = await this.vendorRepository.create(vendorEntity);
            return { data: vendor, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateVendorUseCase = CreateVendorUseCase;
//# sourceMappingURL=CreateVendor.js.map