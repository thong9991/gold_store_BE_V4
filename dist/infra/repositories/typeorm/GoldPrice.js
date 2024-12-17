"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoldPriceRepository = void 0;
const GoldPrice_1 = require("../../../domain/dtos/GoldPrice/GoldPrice");
const data_source_1 = require("../../database/typeorm/data_source");
class GoldPriceRepository {
    async create(data) {
        const goldPriceRepository = data_source_1.AppDataSource.getRepository(GoldPrice_1.GoldPriceDTO);
        const goldPrice = goldPriceRepository.create(data);
        const results = await goldPriceRepository.save(goldPrice);
        return results;
    }
    async update(goldPrice, data) {
        const goldPriceRepository = data_source_1.AppDataSource.getRepository(GoldPrice_1.GoldPriceDTO);
        const updatedGoldPrice = await goldPriceRepository
            .createQueryBuilder('goldPrice')
            .update(GoldPrice_1.GoldPriceDTO)
            .set(data)
            .where('goldType = :goldType', { goldType: goldPrice.goldType })
            .returning(['goldType', 'askPrice', 'bidPrice', 'updatedAt'])
            .updateEntity(true)
            .execute();
        return updatedGoldPrice.raw[0];
    }
    async delete(goldType) {
        const goldPriceRepository = data_source_1.AppDataSource.getRepository(GoldPrice_1.GoldPriceDTO);
        var goldPrice = new GoldPrice_1.GoldPriceDTO();
        goldPrice.goldType = goldType;
        await goldPriceRepository.remove([goldPrice]);
    }
    async findByGoldType(goldType) {
        const goldPriceRepository = data_source_1.AppDataSource.getRepository(GoldPrice_1.GoldPriceDTO);
        const goldPrice = await goldPriceRepository.findOneBy({
            goldType: goldType,
        });
        return goldPrice;
    }
    async findAllDataNoPaging() {
        const goldPriceRepository = data_source_1.AppDataSource.getRepository(GoldPrice_1.GoldPriceDTO);
        const goldPrices = await goldPriceRepository.find({
            order: {
                goldType: 'DESC',
            },
            select: {
                goldType: true,
            },
            cache: 60 * 1000,
        });
        return goldPrices;
    }
    async findAll(pageNumber) {
        const perPage = 10;
        const goldPriceRepository = data_source_1.AppDataSource.getRepository(GoldPrice_1.GoldPriceDTO);
        const [goldPrices, total] = await goldPriceRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                goldType: 'DESC',
            },
            select: {
                goldType: true,
                askPrice: true,
                bidPrice: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: goldPrices,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.GoldPriceRepository = GoldPriceRepository;
//# sourceMappingURL=GoldPrice.js.map