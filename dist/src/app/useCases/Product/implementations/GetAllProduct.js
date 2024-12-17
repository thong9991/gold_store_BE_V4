"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllProductUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/product/ErrorType");
class GetAllProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(page) {
        try {
            const products = await this.productRepository.findAll(page);
            if (products.total == 0) {
                return {
                    data: { error: ErrorType_1.ProductErrorType.ProductNotFound },
                    success: false,
                };
            }
            return { data: products, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetAllProductUseCase = GetAllProductUseCase;
//# sourceMappingURL=GetAllProduct.js.map