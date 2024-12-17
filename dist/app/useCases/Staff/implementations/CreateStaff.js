"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateStaffUseCase = void 0;
const Staff_1 = require("../../../../domain/entities/Staff");
class CreateStaffUseCase {
    constructor(staffRepository) {
        this.staffRepository = staffRepository;
    }
    async execute({ firstName, lastName, phone, address, }) {
        try {
            const staffEntity = Staff_1.StaffEntity.create({
                firstName,
                lastName,
                phone,
                address,
            });
            const staff = await this.staffRepository.create(staffEntity);
            return { data: staff, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateStaffUseCase = CreateStaffUseCase;
//# sourceMappingURL=CreateStaff.js.map