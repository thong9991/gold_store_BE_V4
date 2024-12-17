"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetRepository = void 0;
const Asset_1 = require("../../../domain/dtos/Asset/Asset");
const data_source_1 = require("../../database/typeorm/data_source");
class AssetRepository {
    async create(data) {
        const assetRepository = data_source_1.AppDataSource.getRepository(Asset_1.AssetDTO);
        const asset = assetRepository.create(data);
        const results = await assetRepository.save(asset);
        return results;
    }
    async delete(drawer_id, asset_type) {
        const assetRepository = data_source_1.AppDataSource.getRepository(Asset_1.AssetDTO);
        await assetRepository.delete({
            cashDrawer: {
                id: drawer_id,
            },
            assetType: asset_type,
        });
    }
    async findByCashDrawerId(drawer_id) {
        const assetRepository = data_source_1.AppDataSource.getRepository(Asset_1.AssetDTO);
        const asset = await assetRepository.findOneBy({
            cashDrawer: {
                id: drawer_id,
            },
        });
        return asset;
    }
    async findByDrawerIdAndAssetType(drawer_id, asset_type) {
        const assetRepository = data_source_1.AppDataSource.getRepository(Asset_1.AssetDTO);
        const asset = await assetRepository.findOneBy({
            cashDrawer: {
                id: drawer_id,
            },
            assetType: asset_type,
        });
        return asset;
    }
    async findByDrawerId(drawer_id) {
        const assetRepository = data_source_1.AppDataSource.getRepository(Asset_1.AssetDTO);
        const assets = await assetRepository.find({
            where: {
                cashDrawer: {
                    id: drawer_id,
                },
            },
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                assetType: true,
            },
            cache: 60 * 1000,
        });
        return assets;
    }
    async findAll(drawer_id) {
        const assetRepository = data_source_1.AppDataSource.getRepository(Asset_1.AssetDTO);
        const [assets, total] = await assetRepository.findAndCount({
            where: {
                cashDrawer: { id: drawer_id },
            },
            order: {
                assetType: 'DESC',
            },
            select: {
                id: true,
                cashDrawer: {
                    id: true,
                    drawerName: true,
                },
                assetType: true,
                amount: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: assets,
            total: total,
            page: 1,
            last_page: 1,
        };
    }
}
exports.AssetRepository = AssetRepository;
//# sourceMappingURL=Asset.js.map