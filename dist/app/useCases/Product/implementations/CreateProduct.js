"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
const Product_1 = require("../../../../domain/entities/Product");
class CreateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute({ productName, category, goldPrice, totalWeight, goldWeight, gemWeight, wage, vendor, }) {
        try {
            const convertCategory = category;
            const productEntity = Product_1.ProductEntity.create({
                productName,
                category: convertCategory,
                goldPrice,
                totalWeight,
                goldWeight,
                gemWeight,
                wage,
                vendor,
            });
            const product = await this.productRepository.create(productEntity);
            return { data: product, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
//# sourceMappingURL=CreateProduct.js.map