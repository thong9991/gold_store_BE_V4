"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAdminComposer = updateAdminComposer;
const UpdateAdmin_1 = require("../../../../app/useCases/Admin/implementations/UpdateAdmin");
const UpdateAdmin_2 = require("../../../../presentation/http/controllers/Admin/implementations/UpdateAdmin");
const PasswordHasher_1 = require("../../../providers/PasswordHasher");
const Admin_1 = require("../../../repositories/typeorm/Admin");
function updateAdminComposer() {
    const repostory = new Admin_1.AdminRepository();
    const passwordHasher = new PasswordHasher_1.PasswordHasher();
    const useCase = new UpdateAdmin_1.UpdateAdminUseCase(repostory, passwordHasher);
    const controller = new UpdateAdmin_2.UpdateAdminController(useCase);
    return controller;
}
//# sourceMappingURL=updateAdmin.js.map