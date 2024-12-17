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
exports.NotificationDTO = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../User/User");
let NotificationDTO = class NotificationDTO {
};
exports.NotificationDTO = NotificationDTO;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], NotificationDTO.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], NotificationDTO.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], NotificationDTO.prototype, "body", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb', { nullable: false }),
    __metadata("design:type", Object)
], NotificationDTO.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.UserDTO, (user) => user.notifications),
    (0, typeorm_1.JoinColumn)({
        name: 'user_id',
        referencedColumnName: 'id',
    }),
    __metadata("design:type", User_1.UserDTO)
], NotificationDTO.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Date)
], NotificationDTO.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", Date)
], NotificationDTO.prototype, "updatedAt", void 0);
exports.NotificationDTO = NotificationDTO = __decorate([
    (0, typeorm_1.Entity)('notifications')
], NotificationDTO);
//# sourceMappingURL=Notification.js.map