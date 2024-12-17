"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRepository = void 0;
const Admin_1 = require("../../../domain/dtos/Admin/Admin");
const data_source_1 = require("../../database/typeorm/data_source");
class AdminRepository {
    async create(data) {
        const adminRepository = data_source_1.AppDataSource.getRepository(Admin_1.AdminDTO);
        const admin = adminRepository.create(data);
        const results = await adminRepository.save(admin);
        return results;
    }
    async update(admin, data) {
        const adminRepository = data_source_1.AppDataSource.getRepository(Admin_1.AdminDTO);
        const updatedAdmin = await adminRepository
            .createQueryBuilder('admin')
            .update(Admin_1.AdminDTO)
            .set(data)
            .where('id = :id', { id: admin.id })
            .returning(['id', 'email', 'username', 'password', 'updatedAt'])
            .updateEntity(true)
            .execute();
        return updatedAdmin.raw[0];
    }
    async delete(id) {
        const adminRepository = data_source_1.AppDataSource.getRepository(Admin_1.AdminDTO);
        await adminRepository.delete({ id: id });
    }
    async findById(id) {
        const adminRepository = data_source_1.AppDataSource.getRepository(Admin_1.AdminDTO);
        const admin = await adminRepository.findOneBy({
            id: id,
        });
        return admin;
    }
    async findByUsername(username) {
        const adminRepository = data_source_1.AppDataSource.getRepository(Admin_1.AdminDTO);
        const admin = await adminRepository.findOneBy({
            username: username,
        });
        return admin;
    }
    async findByEmail(email) {
        const adminRepository = data_source_1.AppDataSource.getRepository(Admin_1.AdminDTO);
        const admin = await adminRepository.findOneBy({
            email: email,
        });
        return admin;
    }
    async findAll(pageNumber) {
        const perPage = 4;
        const adminRepository = data_source_1.AppDataSource.getRepository(Admin_1.AdminDTO);
        const [admins, total] = await adminRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                email: true,
                username: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: admins,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.AdminRepository = AdminRepository;
//# sourceMappingURL=Admin.js.map