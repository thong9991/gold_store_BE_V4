"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderExchangeDTO = void 0;
const typeorm_1 = require("typeorm");
const GoldPrice_1 = require("../GoldPrice/GoldPrice");
const OrderDetails_1 = require("../OrderDetails/OrderDetails");
let OrderExchangeDTO = class OrderExchangeDTO {
};
exports.OrderExchangeDTO = OrderExchangeDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderExchangeDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderDetails_1.OrderDetailsDTO, (orderDetails) => orderDetails.orderExchanges),
    (0, typeorm_1.JoinColumn)({
        name: 'order_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", OrderDetails_1.OrderDetailsDTO)
], OrderExchangeDTO.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => GoldPrice_1.GoldPriceDTO, (goldPrice) => goldPrice.orderExchanges),
    (0, typeorm_1.JoinColumn)({
        name: 'gold_type',
        referencedColumnName: 'goldType',
    }),
    __metadata("design:type", GoldPrice_1.GoldPriceDTO)
], OrderExchangeDTO.prototype, "goldPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        nullable: false,
        precision: 5,
        scale: 3,
    }),
    __metadata("design:type", Number)
], OrderExchangeDTO.prototype, "amount", void 0);
exports.OrderExchangeDTO = OrderExchangeDTO = __decorate([
    (0, typeorm_1.Entity)('order_exchanges')
], OrderExchangeDTO);
//# sourceMappingURL=OrderExchange.js.map