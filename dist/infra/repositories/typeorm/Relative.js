"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelativeRepository = void 0;
const Relative_1 = require("../../../domain/dtos/Relative/Relative");
const data_source_1 = require("../../database/typeorm/data_source");
class RelativeRepository {
    async create(data) {
        const relativeRepository = data_source_1.AppDataSource.getRepository(Relative_1.RelativeDTO);
        const relative = relativeRepository.create(data);
        const results = await relativeRepository.save(relative);
        return results;
    }
    async update(relative, data) {
        const relativeRepository = data_source_1.AppDataSource.getRepository(Relative_1.RelativeDTO);
        const updatedRelative = await relativeRepository
            .createQueryBuilder('relative')
            .update(Relative_1.RelativeDTO)
            .set(data)
            .where('id = :id', { id: relative.id })
            .returning([
            'id',
            'staff',
            'name',
            'relationship',
            'contact',
            'updatedAt',
        ])
            .updateEntity(true)
            .execute();
        return updatedRelative.raw[0];
    }
    async delete(id) {
        const relativeRepository = data_source_1.AppDataSource.getRepository(Relative_1.RelativeDTO);
        await relativeRepository.delete({ id: id });
    }
    async deleteByStaffId(staff_id) {
        const relativeRepository = data_source_1.AppDataSource.getRepository(Relative_1.RelativeDTO);
        await relativeRepository.delete({ staff: { id: staff_id } });
    }
    async findById(id) {
        const relativeRepository = data_source_1.AppDataSource.getRepository(Relative_1.RelativeDTO);
        const relative = await relativeRepository.findOne({
            where: { id: id },
            select: {
                id: true,
                name: true,
                relationship: true,
                contact: {
                    id: true,
                },
            },
            relations: ['contact'],
        });
        return relative;
    }
    async findByContactId(contact_id) {
        const relativeRepository = data_source_1.AppDataSource.getRepository(Relative_1.RelativeDTO);
        const relative = await relativeRepository.findOneBy({
            contact: { id: contact_id },
        });
        return relative;
    }
    async findAll(pageNumber) {
        const perPage = 4;
        const relativeRepository = data_source_1.AppDataSource.getRepository(Relative_1.RelativeDTO);
        const [relatives, total] = await relativeRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                staff: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    phone: true,
                    address: true,
                },
                name: true,
                relationship: true,
                contact: {
                    id: true,
                    name: true,
                    phoneType: true,
                    phone: true,
                },
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: relatives,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.RelativeRepository = RelativeRepository;
//# sourceMappingURL=Relative.js.map