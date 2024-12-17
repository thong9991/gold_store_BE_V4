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
exports.DimGoldPriceDTO = void 0;
const typeorm_1 = require("typeorm");
const FactOrderExchange_1 = require("../FactOrderExchange/FactOrderExchange");
const FactOrderSale_1 = require("../FactOrderSale/FactOrderSale");
let DimGoldPriceDTO = class DimGoldPriceDTO {
};
exports.DimGoldPriceDTO = DimGoldPriceDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: 'gold_price_pk' }),
    __metadata("design:type", Number)
], DimGoldPriceDTO.prototype, "goldPricePk", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'gold_type' }),
    __metadata("design:type", String)
], DimGoldPriceDTO.prototype, "goldType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'ask_price' }),
    __metadata("design:type", Number)
], DimGoldPriceDTO.prototype, "askPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'bid_price' }),
    __metadata("design:type", Number)
], DimGoldPriceDTO.prototype, "bidPrice", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FactOrderExchange_1.FactOrderExchangeDTO, (orderExchange) => orderExchange.goldPrice),
    __metadata("design:type", Promise)
], DimGoldPriceDTO.prototype, "orderExchanges", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FactOrderSale_1.FactOrderSaleDTO, (orderSale) => orderSale.goldPrice),
    __metadata("design:type", Promise)
], DimGoldPriceDTO.prototype, "orderSales", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'eff_time' }),
    __metadata("design:type", Date)
], DimGoldPriceDTO.prototype, "effTime", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'exp_time' }),
    __metadata("design:type", Date)
], DimGoldPriceDTO.prototype, "expTime", void 0);
exports.DimGoldPriceDTO = DimGoldPriceDTO = __decorate([
    (0, typeorm_1.Entity)({ name: 'dim_gold_prices' })
], DimGoldPriceDTO);
//# sourceMappingURL=DimGoldPrice.js.map