"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStaffUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/staff/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/staff/SuccessType");
class DeleteStaffUseCase {
    constructor(staffRepository, userRepository, relativeRepository, orderDetailsRepository) {
        this.staffRepository = staffRepository;
        this.userRepository = userRepository;
        this.relativeRepository = relativeRepository;
        this.orderDetailsRepository = orderDetailsRepository;
    }
    async execute(staffId) {
        try {
            const staffExist = (await this.staffRepository.findById(staffId));
            if (!staffExist) {
                return {
                    data: { error: ErrorType_1.StaffErrorType.StaffNotExist },
                    success: false,
                };
            }
            const orderExist = await this.orderDetailsRepository.findByStaffId(staffId);
            if (orderExist) {
                return {
                    data: { error: ErrorType_1.StaffErrorType.OrderConstraint },
                    success: false,
                };
            }
            await this.userRepository.deleteByStaffId(staffId);
            await this.relativeRepository.deleteByStaffId(staffId);
            const paginatedList = await this.orderDetailsRepository.findCheckedOrders(staffId);
            const ordersExist = paginatedList.body;
            if (ordersExist && ordersExist.length > 0) {
                for (var orderDetails of ordersExist) {
                    await this.orderDetailsRepository.delete(orderDetails.id);
                }
            }
            await this.staffRepository.delete(staffId);
            return { data: { msg: SuccessType_1.StaffSuccessType.StaffDeleted }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteStaffUseCase = DeleteStaffUseCase;
//# sourceMappingURL=DeleteStaff.js.map