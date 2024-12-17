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
exports.ProductDTO = exports.ProductCategory = void 0;
const typeorm_1 = require("typeorm");
const GoldPrice_1 = require("../GoldPrice/GoldPrice");
const Vendor_1 = require("../Vendor/Vendor");
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["RING"] = "ring";
    ProductCategory["NECKLACE"] = "necklace";
    ProductCategory["BRACELET"] = "bracelet";
    ProductCategory["OTHER"] = "other";
})(ProductCategory || (exports.ProductCategory = ProductCategory = {}));
let ProductDTO = class ProductDTO {
};
exports.ProductDTO = ProductDTO;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", Number)
], ProductDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'product_name' }),
    __metadata("design:type", String)
], ProductDTO.prototype, "productName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: ProductCategory,
        default: ProductCategory.OTHER,
        nullable: false,
    }),
    __metadata("design:type", String)
], ProductDTO.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => GoldPrice_1.GoldPriceDTO, (goldPrice) => goldPrice.products),
    (0, typeorm_1.JoinColumn)({
        name: 'gold_type',
        referencedColumnName: 'goldType',
    }),
    __metadata("design:type", GoldPrice_1.GoldPriceDTO)
], ProductDTO.prototype, "goldPrice", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        nullable: false,
        name: 'total_weight',
        precision: 5,
        scale: 3,
    }),
    __metadata("design:type", Number)
], ProductDTO.prototype, "totalWeight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        nullable: false,
        name: 'gold_weight',
        precision: 5,
        scale: 3,
    }),
    __metadata("design:type", Number)
], ProductDTO.prototype, "goldWeight", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'decimal',
        nullable: false,
        name: 'gem_weight',
        precision: 4,
        scale: 3,
    }),
    __metadata("design:type", Number)
], ProductDTO.prototype, "gemWeight", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", Number)
], ProductDTO.prototype, "wage", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Vendor_1.VendorDTO, (vendor) => vendor.products),
    (0, typeorm_1.JoinColumn)({
        name: 'vendor_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", Vendor_1.VendorDTO)
], ProductDTO.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], ProductDTO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], ProductDTO.prototype, "updatedAt", void 0);
exports.ProductDTO = ProductDTO = __decorate([
    (0, typeorm_1.Entity)('products')
], ProductDTO);
//# sourceMappingURL=Product.js.map