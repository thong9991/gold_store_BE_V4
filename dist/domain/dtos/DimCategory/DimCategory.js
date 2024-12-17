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
exports.DimCategoryDTO = void 0;
const typeorm_1 = require("typeorm");
const DimProduct_1 = require("../DimProduct/DimProduct");
let DimCategoryDTO = class DimCategoryDTO {
};
exports.DimCategoryDTO = DimCategoryDTO;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'category_pk' }),
    __metadata("design:type", Number)
], DimCategoryDTO.prototype, "categoryPk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'category_name', nullable: false }),
    __metadata("design:type", String)
], DimCategoryDTO.prototype, "categoryName", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DimProduct_1.DimProductDTO, (product) => product.category),
    __metadata("design:type", Promise)
], DimCategoryDTO.prototype, "products", void 0);
exports.DimCategoryDTO = DimCategoryDTO = __decorate([
    (0, typeorm_1.Entity)('dim_category')
], DimCategoryDTO);
//# sourceMappingURL=DimCategory.js.map