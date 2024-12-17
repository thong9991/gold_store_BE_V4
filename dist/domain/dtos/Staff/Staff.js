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
exports.StaffDTO = void 0;
const typeorm_1 = require("typeorm");
const OrderDetails_1 = require("../OrderDetails/OrderDetails");
const Relative_1 = require("../Relative/Relative");
const User_1 = require("../User/User");
let StaffDTO = class StaffDTO {
};
exports.StaffDTO = StaffDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], StaffDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'f_name' }),
    __metadata("design:type", String)
], StaffDTO.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false, name: 'l_name' }),
    __metadata("design:type", String)
], StaffDTO.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], StaffDTO.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], StaffDTO.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User_1.UserDTO, (user) => user.staff),
    __metadata("design:type", Promise)
], StaffDTO.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Relative_1.RelativeDTO, (relative) => relative.staff),
    __metadata("design:type", Promise)
], StaffDTO.prototype, "relatives", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderDetails_1.OrderDetailsDTO, (orderDetails) => orderDetails.staff),
    __metadata("design:type", Promise)
], StaffDTO.prototype, "orderDetails", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], StaffDTO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], StaffDTO.prototype, "updatedAt", void 0);
exports.StaffDTO = StaffDTO = __decorate([
    (0, typeorm_1.Entity)('staffs')
], StaffDTO);
//# sourceMappingURL=Staff.js.map