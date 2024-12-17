"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVendorComposer = getVendorComposer;
const GetAllVendor_1 = require("../../../../app/useCases/Vendor/implementations/GetAllVendor");
const GetVendor_1 = require("../../../../presentation/http/controllers/Vendor/implementations/GetVendor");
const Vendor_1 = require("../../../repositories/typeorm/Vendor");
function getVendorComposer() {
    const repository = new Vendor_1.VendorRepository();
    const useCase = new GetAllVendor_1.GetAllVendorUseCase(repository);
    const controller = new GetVendor_1.GetVendorController(useCase);
    return controller;
}
//# sourceMappingURL=getNotification.js.map