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
exports.OrderDetailsDTO = void 0;
const typeorm_1 = require("typeorm");
const OrderExchange_1 = require("../OrderExchange/OrderExchange");
const OrderSale_1 = require("../OrderSale/OrderSale");
const Staff_1 = require("../Staff/Staff");
let OrderDetailsDTO = class OrderDetailsDTO {
};
exports.OrderDetailsDTO = OrderDetailsDTO;
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { length: 26 }),
    __metadata("design:type", String)
], OrderDetailsDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Staff_1.StaffDTO, (staff) => staff.orderDetails),
    (0, typeorm_1.JoinColumn)({ name: 'staff_id', referencedColumnName: 'id' }),
    __metadata("design:type", Staff_1.StaffDTO)
], OrderDetailsDTO.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderExchange_1.OrderExchangeDTO, (orderExchange) => orderExchange.orderDetails),
    __metadata("design:type", Promise)
], OrderDetailsDTO.prototype, "orderExchanges", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderSale_1.OrderSaleDTO, (orderSale) => orderSale.orderDetails),
    __metadata("design:type", Promise)
], OrderDetailsDTO.prototype, "orderSales", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], OrderDetailsDTO.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'gold_to_cash' }),
    __metadata("design:type", Number)
], OrderDetailsDTO.prototype, "goldToCash", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], OrderDetailsDTO.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], OrderDetailsDTO.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'is_checked', default: false }),
    __metadata("design:type", Boolean)
], OrderDetailsDTO.prototype, "isChecked", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], OrderDetailsDTO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], OrderDetailsDTO.prototype, "updatedAt", void 0);
exports.OrderDetailsDTO = OrderDetailsDTO = __decorate([
    (0, typeorm_1.Entity)('order_details')
], OrderDetailsDTO);
//# sourceMappingURL=OrderDetails.js.map