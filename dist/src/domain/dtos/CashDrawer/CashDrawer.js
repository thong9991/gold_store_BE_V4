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
exports.CashDrawerDTO = void 0;
const typeorm_1 = require("typeorm");
const Asset_1 = require("../Asset/Asset");
let CashDrawerDTO = class CashDrawerDTO {
};
exports.CashDrawerDTO = CashDrawerDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CashDrawerDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'drawer_name', unique: true }),
    __metadata("design:type", String)
], CashDrawerDTO.prototype, "drawerName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'drawer_type' }),
    __metadata("design:type", String)
], CashDrawerDTO.prototype, "drawerType", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Asset_1.AssetDTO, (asset) => asset.cashDrawer),
    __metadata("design:type", Promise)
], CashDrawerDTO.prototype, "assets", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], CashDrawerDTO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], CashDrawerDTO.prototype, "updatedAt", void 0);
exports.CashDrawerDTO = CashDrawerDTO = __decorate([
    (0, typeorm_1.Entity)('cash_drawers')
], CashDrawerDTO);
//# sourceMappingURL=CashDrawer.js.map