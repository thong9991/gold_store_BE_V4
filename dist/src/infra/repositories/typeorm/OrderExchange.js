"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderExchangeRepository = void 0;
const OrderExchange_1 = require("../../../domain/dtos/OrderExchange/OrderExchange");
const data_source_1 = require("../../database/typeorm/data_source");
class OrderExchangeRepository {
    async findById(id) {
        const orderExchangeRepository = data_source_1.AppDataSource.getRepository(OrderExchange_1.OrderExchangeDTO);
        const orderExchange = await orderExchangeRepository.findOneBy({
            id: id,
        });
        return orderExchange;
    }
    async findByOrderId(order_id) {
        const orderExchangeRepository = data_source_1.AppDataSource.getRepository(OrderExchange_1.OrderExchangeDTO);
        const orderExchange = await orderExchangeRepository.findOneBy({
            orderDetails: {
                id: order_id,
            },
        });
        return orderExchange;
    }
    async findByGoldType(goldType) {
        const orderExchangeRepository = data_source_1.AppDataSource.getRepository(OrderExchange_1.OrderExchangeDTO);
        const orderExchange = await orderExchangeRepository.findOneBy({
            goldPrice: {
                goldType: goldType,
            },
        });
        return orderExchange;
    }
    async findAll(pageNumber) {
        const perPage = 4;
        const vendorRepository = data_source_1.AppDataSource.getRepository(OrderExchange_1.OrderExchangeDTO);
        const [vendors, total] = await vendorRepository.findAndCount({
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
                goldPrice: {
                    goldType: true,
                },
            },
        });
        return {
            body: vendors,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.OrderExchangeRepository = OrderExchangeRepository;
//# sourceMappingURL=OrderExchange.js.map