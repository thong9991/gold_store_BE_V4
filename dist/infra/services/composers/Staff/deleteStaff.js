"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStaffComposer = deleteStaffComposer;
const DeleteStaff_1 = require("../../../../app/useCases/Staff/implementations/DeleteStaff");
const DeleteStaff_2 = require("../../../../presentation/http/controllers/Staff/implementations/DeleteStaff");
const OrderDetails_1 = require("../../../repositories/typeorm/OrderDetails");
const Relative_1 = require("../../../repositories/typeorm/Relative");
const Staff_1 = require("../../../repositories/typeorm/Staff");
const User_1 = require("../../../repositories/typeorm/User");
function deleteStaffComposer() {
    const staffRepostory = new Staff_1.StaffRepository();
    const userRepository = new User_1.UserRepository();
    const relativeRepository = new Relative_1.RelativeRepository();
    const orderDetailsRepostory = new OrderDetails_1.OrderDetailsRepository();
    const useCase = new DeleteStaff_1.DeleteStaffUseCase(staffRepostory, userRepository, relativeRepository, orderDetailsRepostory);
    const controller = new DeleteStaff_2.DeleteStaffController(useCase);
    return controller;
}
//# sourceMappingURL=deleteStaff.js.map