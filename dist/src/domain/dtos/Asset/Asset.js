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
exports.AssetDTO = void 0;
const typeorm_1 = require("typeorm");
const CashDrawer_1 = require("../CashDrawer/CashDrawer");
const CashFlow_1 = require("../CashFlow/CashFlow");
let AssetDTO = class AssetDTO {
};
exports.AssetDTO = AssetDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AssetDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CashDrawer_1.CashDrawerDTO, (cashDrawer) => cashDrawer.assets),
    (0, typeorm_1.JoinColumn)({
        name: 'drawer_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", CashDrawer_1.CashDrawerDTO)
], AssetDTO.prototype, "cashDrawer", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'asset_type', nullable: false }),
    __metadata("design:type", String)
], AssetDTO.prototype, "assetType", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, unsigned: true }),
    __metadata("design:type", Number)
], AssetDTO.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CashFlow_1.CashFlowDTO, (cashFlow) => cashFlow.asset),
    __metadata("design:type", Promise)
], AssetDTO.prototype, "cashFlows", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], AssetDTO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], AssetDTO.prototype, "updatedAt", void 0);
exports.AssetDTO = AssetDTO = __decorate([
    (0, typeorm_1.Entity)('assets'),
    (0, typeorm_1.Unique)(['cashDrawer', 'assetType']),
    (0, typeorm_1.Check)('"amount" >= 0')
], AssetDTO);
//# sourceMappingURL=Asset.js.map