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
exports.DimStaffDTO = void 0;
const typeorm_1 = require("typeorm");
const DimOrderDetails_1 = require("../DimOrderDetails/DimOrderDetails");
let DimStaffDTO = class DimStaffDTO {
};
exports.DimStaffDTO = DimStaffDTO;
__decorate([
    (0, typeorm_1.PrimaryColumn)({ name: 'staff_pk' }),
    __metadata("design:type", Number)
], DimStaffDTO.prototype, "staffPk", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'staff_id' }),
    __metadata("design:type", Number)
], DimStaffDTO.prototype, "staffId", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'f_name' }),
    __metadata("design:type", String)
], DimStaffDTO.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'l_name' }),
    __metadata("design:type", String)
], DimStaffDTO.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], DimStaffDTO.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], DimStaffDTO.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => DimOrderDetails_1.DimOrderDetailsDTO, (orderDetails) => orderDetails.staff),
    __metadata("design:type", Promise)
], DimStaffDTO.prototype, "orderDetails", void 0);
exports.DimStaffDTO = DimStaffDTO = __decorate([
    (0, typeorm_1.Entity)('dim_staffs')
], DimStaffDTO);
//# sourceMappingURL=DimStaff.js.map