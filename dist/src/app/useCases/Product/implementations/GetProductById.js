"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductByIdUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/product/ErrorType");
class GetProductByIdUseCase {
    constructor(productRepository, orderSaleRepository) {
        this.productRepository = productRepository;
        this.orderSaleRepository = orderSaleRepository;
    }
    async execute(productId) {
        try {
            const orderSaleExists = await this.orderSaleRepository.findByProductId(productId);
            if (orderSaleExists) {
                return { data: { error: ErrorType_1.ProductErrorType.SoldProduct }, success: false };
            }
            const product = await this.productRepository.findById(productId);
            if (!product) {
                return {
                    data: { error: ErrorType_1.ProductErrorType.ProductNotExist },
                    success: true,
                };
            }
            return { data: product, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.GetProductByIdUseCase = GetProductByIdUseCase;
//# sourceMappingURL=GetProductById.js.map