"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashDrawerRepository = void 0;
const CashDrawer_1 = require("../../../domain/dtos/CashDrawer/CashDrawer");
const data_source_1 = require("../../database/typeorm/data_source");
class CashDrawerRepository {
    async create(data) {
        const cashDrawerRepository = data_source_1.AppDataSource.getRepository(CashDrawer_1.CashDrawerDTO);
        const cashDrawer = cashDrawerRepository.create(data);
        const results = await cashDrawerRepository.save(cashDrawer);
        return results;
    }
    async update(cashDrawer, data) {
        const cashDrawerRepository = data_source_1.AppDataSource.getRepository(CashDrawer_1.CashDrawerDTO);
        const updatedCashDrawer = await cashDrawerRepository
            .createQueryBuilder('cashDrawer')
            .update(CashDrawer_1.CashDrawerDTO)
            .set(data)
            .where('id = :id', { id: cashDrawer.id })
            .returning(['id', 'drawerName', 'drawerType', 'updatedAt'])
            .updateEntity(true)
            .execute();
        return updatedCashDrawer.raw[0];
    }
    async delete(id) {
        const cashDrawerRepository = data_source_1.AppDataSource.getRepository(CashDrawer_1.CashDrawerDTO);
        await cashDrawerRepository.delete({ id: id });
    }
    async findById(id) {
        const cashDrawerRepository = data_source_1.AppDataSource.getRepository(CashDrawer_1.CashDrawerDTO);
        const cashDrawer = await cashDrawerRepository.findOneBy({
            id: id,
        });
        return cashDrawer;
    }
    async findAllDataNoPaging() {
        const cashDrawerRepository = data_source_1.AppDataSource.getRepository(CashDrawer_1.CashDrawerDTO);
        const cashDrawers = await cashDrawerRepository.find({
            order: {
                drawerName: 'ASC',
            },
            select: {
                id: true,
                drawerName: true,
            },
            cache: 60 * 1000,
        });
        return cashDrawers;
    }
    async findAll(pageNumber) {
        const perPage = 4;
        const cashDrawerRepository = data_source_1.AppDataSource.getRepository(CashDrawer_1.CashDrawerDTO);
        const [cashDrawers, total] = await cashDrawerRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                drawerName: true,
                drawerType: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: cashDrawers,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.CashDrawerRepository = CashDrawerRepository;
//# sourceMappingURL=CashDrawer.js.map