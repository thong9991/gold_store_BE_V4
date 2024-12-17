"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStaffUseCase = void 0;
const Staff_1 = require("../../../../domain/entities/Staff");
const ErrorType_1 = require("../../../../domain/enums/staff/ErrorType");
class UpdateStaffUseCase {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }
    async execute(staffId, { firstName, lastName, phone, address }) {
        try {
            const staffExist = (await this.staffRepository.findById(staffId));
            if (!staffExist) {
                return {
                    data: { error: ErrorType_1.StaffErrorType.StaffNotExist },
                    success: false,
                };
            }
            const staffEntity = Staff_1.StaffEntity.update({
                firstName,
                lastName,
                phone,
                address,
            });
            const staff = await this.staffRepository.update(staffExist, staffEntity);
            return { data: staff, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateStaffUseCase = UpdateStaffUseCase;
//# sourceMappingURL=UpdateStaff.js.map