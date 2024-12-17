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
exports.UserDTO = void 0;
const typeorm_1 = require("typeorm");
const Staff_1 = require("../Staff/Staff");
const Notification_1 = require("../Notification/Notification");
let UserDTO = class UserDTO {
};
exports.UserDTO = UserDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'user' }),
    __metadata("design:type", String)
], UserDTO.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], UserDTO.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'fcm_token', default: '' }),
    __metadata("design:type", String)
], UserDTO.prototype, "fcmToken", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Staff_1.StaffDTO, (staff) => staff.users),
    (0, typeorm_1.JoinColumn)({
        name: 'staff_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", Staff_1.StaffDTO)
], UserDTO.prototype, "staff", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Notification_1.NotificationDTO, (notification) => notification.user),
    __metadata("design:type", Promise)
], UserDTO.prototype, "notifications", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], UserDTO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], UserDTO.prototype, "updatedAt", void 0);
exports.UserDTO = UserDTO = __decorate([
    (0, typeorm_1.Entity)('users')
], UserDTO);
//# sourceMappingURL=User.js.map