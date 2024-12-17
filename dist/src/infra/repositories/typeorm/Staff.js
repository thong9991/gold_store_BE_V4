"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffRepository = void 0;
const Staff_1 = require("../../../domain/dtos/Staff/Staff");
const data_source_1 = require("../../database/typeorm/data_source");
class StaffRepository {
    async create(data) {
        const staffRepository = data_source_1.AppDataSource.getRepository(Staff_1.StaffDTO);
        const staff = staffRepository.create(data);
        const results = await staffRepository.save(staff);
        return results;
    }
    async update(staff, data) {
        const staffRepository = data_source_1.AppDataSource.getRepository(Staff_1.StaffDTO);
        const updatedStaff = await staffRepository
            .createQueryBuilder('staff')
            .update(Staff_1.StaffDTO)
            .set(data)
            .where('id = :id', { id: staff.id })
            .returning([
            'id',
            'firstName',
            'lastName',
            'phone',
            'address',
            'updatedAt',
        ])
            .updateEntity(true)
            .execute();
        return updatedStaff.raw[0];
    }
    async delete(id) {
        const staffRepository = data_source_1.AppDataSource.getRepository(Staff_1.StaffDTO);
        await staffRepository.delete({ id: id });
    }
    async findById(id) {
        const staffRepository = data_source_1.AppDataSource.getRepository(Staff_1.StaffDTO);
        const staff = await staffRepository.findOneBy({
            id: id,
        });
        return staff;
    }
    async findByUserId(id) {
        const staffRepository = data_source_1.AppDataSource.getRepository(Staff_1.StaffDTO);
        const staff = await staffRepository.findOneBy({
            users: {
                id: id,
            },
        });
        return staff;
    }
    async findAllDataNoPaging() {
        const staffRepository = data_source_1.AppDataSource.getRepository(Staff_1.StaffDTO);
        const staffs = await staffRepository.find({
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
            },
            cache: 60 * 1000,
        });
        return staffs;
    }
    async findAll(pageNumber) {
        const perPage = 4;
        const staffRepository = data_source_1.AppDataSource.getRepository(Staff_1.StaffDTO);
        const [staffs, total] = await staffRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                phone: true,
                address: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: staffs,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.StaffRepository = StaffRepository;
//# sourceMappingURL=Staff.js.map