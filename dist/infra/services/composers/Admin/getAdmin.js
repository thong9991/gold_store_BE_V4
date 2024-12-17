"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminComposer = getAdminComposer;
const GetAllAdmin_1 = require("../../../../app/useCases/Admin/implementations/GetAllAdmin");
const GetAdmin_1 = require("../../../../presentation/http/controllers/Admin/implementations/GetAdmin");
const Admin_1 = require("../../../repositories/typeorm/Admin");
function getAdminComposer() {
    const repository = new Admin_1.AdminRepository();
    const useCase = new GetAllAdmin_1.GetAllAdminUseCase(repository);
    const controller = new GetAdmin_1.GetAdminController(useCase);
    return controller;
}
//# sourceMappingURL=getAdmin.js.map