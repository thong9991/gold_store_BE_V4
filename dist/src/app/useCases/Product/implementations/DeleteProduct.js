"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/product/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/product/SuccessType");
class DeleteProductUseCase {
    constructor(productRepository, orderSaleRepository) {
        this.productRepository = productRepository;
        this.orderSaleRepository = orderSaleRepository;
    }
    async execute(productId) {
        try {
            const productExist = (await this.productRepository.findById(productId));
            if (!productExist) {
                return {
                    data: { error: ErrorType_1.ProductErrorType.ProductNotExist },
                    success: false,
                };
            }
            const orderExist = await this.orderSaleRepository.findByProductId(productId);
            if (orderExist) {
                return {
                    data: { error: ErrorType_1.ProductErrorType.OrderConstraint },
                    success: false,
                };
            }
            await this.productRepository.delete(productId);
            return { data: { msg: SuccessType_1.ProductSuccessType.ProductDeleted }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteProductUseCase = DeleteProductUseCase;
//# sourceMappingURL=DeleteProduct.js.map