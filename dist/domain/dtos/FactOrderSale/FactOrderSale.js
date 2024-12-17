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
exports.FactOrderSaleDTO = void 0;
const typeorm_1 = require("typeorm");
const DimOrderDetails_1 = require("../DimOrderDetails/DimOrderDetails");
const DimProduct_1 = require("../DimProduct/DimProduct");
const DimGoldPrice_1 = require("../DimGoldPrice/DimGoldPrice");
const DimVendor_1 = require("../DimVendor/DimVendor");
let FactOrderSaleDTO = class FactOrderSaleDTO {
};
exports.FactOrderSaleDTO = FactOrderSaleDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FactOrderSaleDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DimOrderDetails_1.DimOrderDetailsDTO, (orderDetails) => orderDetails.orderSales),
    (0, typeorm_1.JoinColumn)({
        name: 'order_fk',
        referencedColumnName: 'orderPk',
    }),
    __metadata("design:type", DimOrderDetails_1.DimOrderDetailsDTO)
], FactOrderSaleDTO.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => DimProduct_1.DimProductDTO),
    (0, typeorm_1.JoinColumn)({
        name: 'product_fk',
        referencedColumnName: 'productPk',
    }),
    __metadata("design:type", DimProduct_1.DimProductDTO)
], FactOrderSaleDTO.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DimGoldPrice_1.DimGoldPriceDTO, (goldPrice) => goldPrice.orderSales),
    (0, typeorm_1.JoinColumn)({
        name: 'gold_price_fk',
        referencedColumnName: 'goldPricePk',
    }),
    __metadata("design:type", DimGoldPrice_1.DimGoldPriceDTO)
], FactOrderSaleDTO.prototype, "goldPrice", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DimVendor_1.DimVendorDTO, (vendor) => vendor.orderSales),
    (0, typeorm_1.JoinColumn)({
        name: 'vendor_fk',
        referencedColumnName: 'vendorPk',
    }),
    __metadata("design:type", DimVendor_1.DimVendorDTO)
], FactOrderSaleDTO.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        nullable: false,
        precision: 5,
        scale: 3,
        name: 'cut_amount',
    }),
    __metadata("design:type", Number)
], FactOrderSaleDTO.prototype, "cutAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'new_wage' }),
    __metadata("design:type", Number)
], FactOrderSaleDTO.prototype, "newWage", void 0);
exports.FactOrderSaleDTO = FactOrderSaleDTO = __decorate([
    (0, typeorm_1.Entity)('fact_order_sales')
], FactOrderSaleDTO);
//# sourceMappingURL=FactOrderSale.js.map