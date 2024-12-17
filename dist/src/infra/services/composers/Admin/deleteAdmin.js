"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdminComposer = deleteAdminComposer;
const DeleteAdmin_1 = require("../../../../app/useCases/Admin/implementations/DeleteAdmin");
const DeleteAdmin_2 = require("../../../../presentation/http/controllers/Admin/implementations/DeleteAdmin");
const Admin_1 = require("../../../repositories/typeorm/Admin");
function deleteAdminComposer() {
    const repostory = new Admin_1.AdminRepository();
    const useCase = new DeleteAdmin_1.DeleteAdminUseCase(repostory);
    const controller = new DeleteAdmin_2.DeleteAdminController(useCase);
    return controller;
}
//# sourceMappingURL=deleteAdmin.js.map