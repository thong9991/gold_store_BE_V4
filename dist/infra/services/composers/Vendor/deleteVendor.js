"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVendorComposer = deleteVendorComposer;
const DeleteVendor_1 = require("../../../../app/useCases/Vendor/implementations/DeleteVendor");
const DeleteVendor_2 = require("../../../../presentation/http/controllers/Vendor/implementations/DeleteVendor");
const Product_1 = require("../../../repositories/typeorm/Product");
const Vendor_1 = require("../../../repositories/typeorm/Vendor");
function deleteVendorComposer() {
    const vendorRepostory = new Vendor_1.VendorRepository();
    const productRepository = new Product_1.ProductRepository();
    const useCase = new DeleteVendor_1.DeleteVendorUseCase(vendorRepostory, productRepository);
    const controller = new DeleteVendor_2.DeleteVendorController(useCase);
    return controller;
}
//# sourceMappingURL=deleteVendor.js.map