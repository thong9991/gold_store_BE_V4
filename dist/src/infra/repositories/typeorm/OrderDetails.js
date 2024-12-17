"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderDetailsRepository = void 0;
const ulidx_1 = require("ulidx");
const OrderDetails_1 = require("../../../domain/dtos/OrderDetails/OrderDetails");
const OrderExchange_1 = require("../../../domain/dtos/OrderExchange/OrderExchange");
const OrderSale_1 = require("../../../domain/dtos/OrderSale/OrderSale");
const data_source_1 = require("../../database/typeorm/data_source");
class OrderDetailsRepository {
    async create(data) {
        const queryRunner = data_source_1.AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        var savedOrderDetails;
        try {
            const id = (0, ulidx_1.ulid)();
            savedOrderDetails = await queryRunner.manager.save(OrderDetails_1.OrderDetailsDTO, {
                id: id,
                staff: data.staff,
                total: data.total,
                goldToCash: data.goldToCash,
                discount: data.discount,
                isChecked: data.isChecked,
                description: data.description,
            });
            if (data.orderExchanges) {
                for (var orderExchange of data.orderExchanges) {
                    await queryRunner.manager.save(OrderExchange_1.OrderExchangeDTO, {
                        ...orderExchange,
                        orderDetails: savedOrderDetails,
                    });
                }
            }
            if (data.orderSales) {
                for (var orderSale of data.orderSales) {
                    await queryRunner.manager.save(OrderSale_1.OrderSaleDTO, {
                        ...orderSale,
                        orderDetails: savedOrderDetails,
                    });
                }
            }
            await queryRunner.commitTransaction();
        }
        catch (e) {
            await queryRunner.rollbackTransaction();
            throw e;
        }
        finally {
            await queryRunner.release();
        }
        return savedOrderDetails;
    }
    async update(orderDetails, data) {
        const orderDetailsRepository = data_source_1.AppDataSource.getRepository(OrderDetails_1.OrderDetailsDTO);
        const updatedOrderDetails = await orderDetailsRepository
            .createQueryBuilder('orderDetails')
            .update(OrderDetails_1.OrderDetailsDTO)
            .set(data)
            .where('id = :id', { id: orderDetails.id })
            .returning([
            'id',
            'staff',
            'total',
            'goldToCash',
            'discount',
            'isChecked',
            'description',
            'updatedAt',
        ])
            .updateEntity(true)
            .execute();
        return updatedOrderDetails.raw[0];
    }
    async delete(id) {
        const queryRunner = data_source_1.AppDataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            await queryRunner.manager.delete(OrderSale_1.OrderSaleDTO, {
                orderDetails: { id: id },
            });
            await queryRunner.manager.delete(OrderExchange_1.OrderExchangeDTO, {
                orderDetails: { id: id },
            });
            await queryRunner.manager.delete(OrderDetails_1.OrderDetailsDTO, { id: id });
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
        const orderDetailsRepository = data_source_1.AppDataSource.getRepository(OrderDetails_1.OrderDetailsDTO);
        const orderDetails = await orderDetailsRepository.findOneBy({
            id: id,
        });
        return orderDetails;
    }
    async findByStaffId(staff_id) {
        const orderDetailsRepository = data_source_1.AppDataSource.getRepository(OrderDetails_1.OrderDetailsDTO);
        const orderDetails = await orderDetailsRepository.findOneBy({
            staff: { id: staff_id },
            isChecked: false,
        });
        return orderDetails;
    }
    async findCheckedOrders(staff_id) {
        const perPage = 100;
        const orderDetailsRepository = data_source_1.AppDataSource.getRepository(OrderDetails_1.OrderDetailsDTO);
        const [orders, total] = await orderDetailsRepository.findAndCount({
            where: {
                staff: staff_id != -1 ? { id: staff_id } : {},
                isChecked: true,
            },
            take: perPage,
            skip: 0,
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                isChecked: true,
            },
        });
        return {
            body: orders,
            total: total,
            page: 1,
            last_page: Math.ceil(total / perPage),
        };
    }
    async findAll(pageNumber) {
        const perPage = 4;
        const orderDetailsRepository = data_source_1.AppDataSource.getRepository(OrderDetails_1.OrderDetailsDTO);
        const [orders, total] = await orderDetailsRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                staff: {
                    id: true,
                    firstName: true,
                    lastName: true,
                },
                total: true,
                goldToCash: true,
                discount: true,
                isChecked: true,
                description: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: orders,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.OrderDetailsRepository = OrderDetailsRepository;
//# sourceMappingURL=OrderDetails.js.map