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
exports.OrderSaleDTO = void 0;
const typeorm_1 = require("typeorm");
const OrderDetails_1 = require("../OrderDetails/OrderDetails");
const Product_1 = require("../Product/Product");
let OrderSaleDTO = class OrderSaleDTO {
};
exports.OrderSaleDTO = OrderSaleDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], OrderSaleDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => OrderDetails_1.OrderDetailsDTO, (orderDetails) => orderDetails.orderSales),
    (0, typeorm_1.JoinColumn)({
        name: 'order_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", OrderDetails_1.OrderDetailsDTO)
], OrderSaleDTO.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Product_1.ProductDTO),
    (0, typeorm_1.JoinColumn)({
        name: 'product_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", Product_1.ProductDTO)
], OrderSaleDTO.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        nullable: false,
        precision: 5,
        scale: 3,
        name: 'cut_amount',
    }),
    __metadata("design:type", Number)
], OrderSaleDTO.prototype, "cutAmount", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'new_wage' }),
    __metadata("design:type", Number)
], OrderSaleDTO.prototype, "newWage", void 0);
exports.OrderSaleDTO = OrderSaleDTO = __decorate([
    (0, typeorm_1.Entity)('order_sales')
], OrderSaleDTO);
//# sourceMappingURL=OrderSale.js.map