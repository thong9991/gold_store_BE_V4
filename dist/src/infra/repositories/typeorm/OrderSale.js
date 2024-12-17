"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSaleRepository = void 0;
const OrderSale_1 = require("../../../domain/dtos/OrderSale/OrderSale");
const data_source_1 = require("../../database/typeorm/data_source");
class OrderSaleRepository {
    async findById(id) {
        const orderSaleRepository = data_source_1.AppDataSource.getRepository(OrderSale_1.OrderSaleDTO);
        const orderSale = await orderSaleRepository.findOneBy({
            id: id,
        });
        return orderSale;
    }
    async findByProductId(product_id) {
        const orderSaleRepository = data_source_1.AppDataSource.getRepository(OrderSale_1.OrderSaleDTO);
        const orderSale = await orderSaleRepository.findOneBy({
            product: { id: product_id },
        });
        return orderSale;
    }
    async findAll(pageNumber) {
        const perPage = 4;
        const orderSaleRepository = data_source_1.AppDataSource.getRepository(OrderSale_1.OrderSaleDTO);
        const [orderSales, total] = await orderSaleRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                orderDetails: {
                    id: true,
                    isChecked: true,
                    createdAt: true,
                    updatedAt: true,
                },
                product: {
                    id: true,
                    productName: true,
                    category: true,
                    goldPrice: {
                        goldType: true,
                    },
                    goldWeight: true,
                    wage: true,
                },
                cutAmount: true,
                newWage: true,
            },
        });
        return {
            body: orderSales,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.OrderSaleRepository = OrderSaleRepository;
//# sourceMappingURL=OrderSale.js.map