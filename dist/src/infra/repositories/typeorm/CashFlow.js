"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashFlowRepository = void 0;
const Asset_1 = require("../../../domain/dtos/Asset/Asset");
const CashFlow_1 = require("../../../domain/dtos/CashFlow/CashFlow");
const data_source_1 = require("../../database/typeorm/data_source");
class CashFlowRepository {
    async create(data) {
        const queryRunner = data_source_1.AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        var cashFlow;
        try {
            var asset = await queryRunner.manager.findOneBy(Asset_1.AssetDTO, {
                id: data.asset.id,
            });
            var remainingAsset = asset.amount + data.amount;
            await queryRunner.manager.update(Asset_1.AssetDTO, { id: asset.id }, {
                amount: remainingAsset,
            });
            cashFlow = await queryRunner.manager.save(CashFlow_1.CashFlowDTO, {
                asset: { id: asset.id },
                amount: data.amount,
            });
            await queryRunner.commitTransaction();
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
            throw e;
        }
        finally {
            await queryRunner.release();
        }
        return cashFlow;
    }
    async delete(id) {
        const queryRunner = data_source_1.AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            var cashFlow = await queryRunner.manager.findOneBy(CashFlow_1.CashFlowDTO, {
                id: id,
            });
            var asset = await queryRunner.manager.findOneBy(Asset_1.AssetDTO, {
                cashFlows: {
                    id: cashFlow.id,
                },
            });
            var remainingAsset = asset.amount - cashFlow.amount;
            await queryRunner.manager.update(Asset_1.AssetDTO, { id: asset.id }, {
                amount: remainingAsset,
            });
            await queryRunner.manager.delete(CashFlow_1.CashFlowDTO, { id: cashFlow.id });
            await queryRunner.commitTransaction();
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
            throw e;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findById(id) {
        const cashFlowRepository = data_source_1.AppDataSource.getRepository(CashFlow_1.CashFlowDTO);
        const cashFlow = await cashFlowRepository.findOneBy({
            id: id,
        });
        return cashFlow;
    }
    async findByAssetId(asset_id) {
        const cashFlowRepository = data_source_1.AppDataSource.getRepository(CashFlow_1.CashFlowDTO);
        const cashFlow = await cashFlowRepository.findOneBy({
            asset: { id: asset_id },
        });
        return cashFlow;
    }
    async findAll(pageNumber) {
        const perPage = 25;
        const cashFlowRepository = data_source_1.AppDataSource.getRepository(CashFlow_1.CashFlowDTO);
        const [cashFlows, total] = await cashFlowRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                asset: {
                    assetType: true,
                },
                amount: true,
                createdAt: true,
            },
        });
        return {
            body: cashFlows,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.CashFlowRepository = CashFlowRepository;
//# sourceMappingURL=CashFlow.js.map