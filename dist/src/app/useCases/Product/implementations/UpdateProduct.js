"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductUseCase = void 0;
const Product_1 = require("../../../../domain/entities/Product");
const ErrorType_1 = require("../../../../domain/enums/product/ErrorType");
class UpdateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(productId, { productName, category, goldPrice, totalWeight, goldWeight, gemWeight, wage, vendor, }) {
        try {
            const productExist = (await this.productRepository.findById(productId));
            if (!productExist) {
                return {
                    data: { error: ErrorType_1.ProductErrorType.ProductNotExist },
                    success: false,
                };
            }
            const productEntity = Product_1.ProductEntity.update({
                productName,
                category,
                goldPrice,
                totalWeight,
                goldWeight,
                gemWeight,
                wage,
                vendor,
            });
            const product = await this.productRepository.update(productExist, productEntity);
            return { data: product, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateProductUseCase = UpdateProductUseCase;
//# sourceMappingURL=UpdateProduct.js.map