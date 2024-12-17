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
exports.FactOrderExchangeDTO = void 0;
const typeorm_1 = require("typeorm");
const DimGoldPrice_1 = require("../DimGoldPrice/DimGoldPrice");
const DimOrderDetails_1 = require("../DimOrderDetails/DimOrderDetails");
let FactOrderExchangeDTO = class FactOrderExchangeDTO {
};
exports.FactOrderExchangeDTO = FactOrderExchangeDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FactOrderExchangeDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DimOrderDetails_1.DimOrderDetailsDTO, (orderDetails) => orderDetails.orderExchanges),
    (0, typeorm_1.JoinColumn)({
        name: 'order_fk',
        referencedColumnName: 'orderPk',
    }),
    __metadata("design:type", DimOrderDetails_1.DimOrderDetailsDTO)
], FactOrderExchangeDTO.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DimGoldPrice_1.DimGoldPriceDTO, (goldPrice) => goldPrice.orderExchanges),
    (0, typeorm_1.JoinColumn)({
        name: 'gold_price_fk',
        referencedColumnName: 'goldPricePk',
    }),
    __metadata("design:type", DimGoldPrice_1.DimGoldPriceDTO)
], FactOrderExchangeDTO.prototype, "goldPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], FactOrderExchangeDTO.prototype, "amount", void 0);
exports.FactOrderExchangeDTO = FactOrderExchangeDTO = __decorate([
    (0, typeorm_1.Entity)('fact_order_exchanges')
], FactOrderExchangeDTO);
//# sourceMappingURL=FactOrderExchange.js.map