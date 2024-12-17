"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStaffComposer = getStaffComposer;
const GetAllStaff_1 = require("../../../../app/useCases/Staff/implementations/GetAllStaff");
const GetStaff_1 = require("../../../../presentation/http/controllers/Staff/implementations/GetStaff");
const Staff_1 = require("../../../repositories/typeorm/Staff");
function getStaffComposer() {
    const repository = new Staff_1.StaffRepository();
    const useCase = new GetAllStaff_1.GetAllStaffUseCase(repository);
    const controller = new GetStaff_1.GetStaffController(useCase);
    return controller;
}
//# sourceMappingURL=getStaff.js.map