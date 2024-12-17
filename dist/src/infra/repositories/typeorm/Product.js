"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const Product_1 = require("../../../domain/dtos/Product/Product");
const data_source_1 = require("../../database/typeorm/data_source");
class ProductRepository {
    async create(data) {
        const productRepository = data_source_1.AppDataSource.getRepository(Product_1.ProductDTO);
        const product = productRepository.create(data);
        const date = new Date();
        product.createdAt = date;
        product.updatedAt = date;
        const unixTimestamp = Math.floor(date.getTime() / 1000);
        product.id = unixTimestamp;
        const results = await productRepository.save(product);
        return results;
    }
    async update(product, data) {
        const productRepository = data_source_1.AppDataSource.getRepository(Product_1.ProductDTO);
        const updatedProduct = await productRepository
            .createQueryBuilder('product')
            .update(Product_1.ProductDTO)
            .set(data)
            .where('id = :id', { id: product.id })
            .returning([
            'id',
            'productName',
            'category',
            'goldPrice',
            'totalWeight',
            'goldWeight',
            'gemWeight',
            'wage',
            'vendor',
            'updatedAt',
        ])
            .updateEntity(true)
            .execute();
        return updatedProduct.raw[0];
    }
    async delete(id) {
        const productRepository = data_source_1.AppDataSource.getRepository(Product_1.ProductDTO);
        await productRepository.delete({ id: id });
    }
    async findById(id) {
        const productRepository = data_source_1.AppDataSource.getRepository(Product_1.ProductDTO);
        const product = await productRepository.findOne({
            where: { id: id },
            select: {
                id: true,
                productName: true,
                category: true,
                goldPrice: {
                    goldType: true,
                },
                totalWeight: true,
                goldWeight: true,
                gemWeight: true,
                wage: true,
                createdAt: true,
                updatedAt: true,
            },
            relations: ['goldPrice'],
        });
        return product;
    }
    async findByGoldType(goldType) {
        const productRepository = data_source_1.AppDataSource.getRepository(Product_1.ProductDTO);
        const product = await productRepository.findOneBy({
            goldPrice: { goldType: goldType },
        });
        return product;
    }
    async findByVendorId(vendor_id) {
        const productRepository = data_source_1.AppDataSource.getRepository(Product_1.ProductDTO);
        const product = await productRepository.findOneBy({
            vendor: { id: vendor_id },
        });
        return product;
    }
    async findAll(pageNumber) {
        const perPage = 10;
        const productRepository = data_source_1.AppDataSource.getRepository(Product_1.ProductDTO);
        const [products, total] = await productRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                productName: true,
                category: true,
                goldPrice: {
                    goldType: true,
                },
                totalWeight: true,
                goldWeight: true,
                gemWeight: true,
                wage: true,
                vendor: {
                    id: true,
                    vendorName: true,
                    vendorAddress: true,
                },
                createdAt: true,
                updatedAt: true,
            },
            relations: {
                goldPrice: true,
                vendor: true,
            },
        });
        return {
            body: products,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=Product.js.map