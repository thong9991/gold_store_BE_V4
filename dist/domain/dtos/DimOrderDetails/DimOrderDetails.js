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
exports.DimOrderDetailsDTO = void 0;
const typeorm_1 = require("typeorm");
const DimDescription_1 = require("../DimDescription/DimDescription");
const DimStaff_1 = require("../DimStaff/DimStaff");
const FactOrderExchange_1 = require("../FactOrderExchange/FactOrderExchange");
const FactOrderSale_1 = require("../FactOrderSale/FactOrderSale");
let DimOrderDetailsDTO = class DimOrderDetailsDTO {
};
exports.DimOrderDetailsDTO = DimOrderDetailsDTO;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'order_pk' }),
    __metadata("design:type", Number)
], DimOrderDetailsDTO.prototype, "orderPk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'order_id' }),
    __metadata("design:type", Number)
], DimOrderDetailsDTO.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'transaction_time' }),
    __metadata("design:type", Number)
], DimOrderDetailsDTO.prototype, "transactionTime", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DimStaff_1.DimStaffDTO, (staff) => staff.orderDetails),
    (0, typeorm_1.JoinColumn)({ name: 'staff_fk', referencedColumnName: 'staffPk' }),
    __metadata("design:type", DimStaff_1.DimStaffDTO)
], DimOrderDetailsDTO.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => DimDescription_1.DimDescriptionDTO, (description) => description.orderDetails),
    (0, typeorm_1.JoinColumn)({ name: 'description_fk', referencedColumnName: 'descriptionPk' }),
    __metadata("design:type", DimDescription_1.DimDescriptionDTO)
], DimOrderDetailsDTO.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FactOrderExchange_1.FactOrderExchangeDTO, (orderExchange) => orderExchange.orderDetails),
    __metadata("design:type", Promise)
], DimOrderDetailsDTO.prototype, "orderExchanges", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => FactOrderSale_1.FactOrderSaleDTO, (orderSale) => orderSale.orderDetails),
    __metadata("design:type", Promise)
], DimOrderDetailsDTO.prototype, "orderSales", void 0);
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], DimOrderDetailsDTO.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'gold_to_cash' }),
    __metadata("design:type", Number)
], DimOrderDetailsDTO.prototype, "goldToCash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], DimOrderDetailsDTO.prototype, "discount", void 0);
exports.DimOrderDetailsDTO = DimOrderDetailsDTO = __decorate([
    (0, typeorm_1.Entity)('dim_order_details')
], DimOrderDetailsDTO);
//# sourceMappingURL=DimOrderDetails.js.map