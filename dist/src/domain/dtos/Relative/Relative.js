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
exports.RelativeDTO = void 0;
const typeorm_1 = require("typeorm");
const Contact_1 = require("../Contact/Contact");
const Staff_1 = require("../Staff/Staff");
let RelativeDTO = class RelativeDTO {
};
exports.RelativeDTO = RelativeDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RelativeDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Staff_1.StaffDTO, (staff) => staff.relatives),
    (0, typeorm_1.JoinColumn)({
        name: 'staff_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", Staff_1.StaffDTO)
], RelativeDTO.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], RelativeDTO.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], RelativeDTO.prototype, "relationship", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Contact_1.ContactDTO),
    (0, typeorm_1.JoinColumn)({ name: 'contact_id' }),
    __metadata("design:type", Contact_1.ContactDTO)
], RelativeDTO.prototype, "contact", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], RelativeDTO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], RelativeDTO.prototype, "updatedAt", void 0);
exports.RelativeDTO = RelativeDTO = __decorate([
    (0, typeorm_1.Entity)('relatives')
], RelativeDTO);
//# sourceMappingURL=Relative.js.map