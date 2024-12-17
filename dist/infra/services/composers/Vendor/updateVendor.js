"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateVendorComposer = updateVendorComposer;
const UpdateVendor_1 = require("../../../../app/useCases/Vendor/implementations/UpdateVendor");
const UpdateVendor_2 = require("../../../../presentation/http/controllers/Vendor/implementations/UpdateVendor");
const Vendor_1 = require("../../../repositories/typeorm/Vendor");
function updateVendorComposer() {
    const repostory = new Vendor_1.VendorRepository();
    const useCase = new UpdateVendor_1.UpdateVendorUseCase(repostory);
    const controller = new UpdateVendor_2.UpdateVendorController(useCase);
    return controller;
}
//# sourceMappingURL=updateVendor.js.map