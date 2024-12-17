"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createVendorComposer = createVendorComposer;
const CreateVendor_1 = require("../../../../app/useCases/Vendor/implementations/CreateVendor");
const CreateVendor_2 = require("../../../../presentation/http/controllers/Vendor/implementations/CreateVendor");
const Vendor_1 = require("../../../repositories/typeorm/Vendor");
function createVendorComposer() {
    const repostory = new Vendor_1.VendorRepository();
    const useCase = new CreateVendor_1.CreateVendorUseCase(repostory);
    const controller = new CreateVendor_2.CreateVendorController(useCase);
    return controller;
}
//# sourceMappingURL=createVendor.js.map