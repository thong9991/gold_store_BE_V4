"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationRepository = void 0;
const Notification_1 = require("../../../domain/dtos/Notification/Notification");
const data_source_1 = require("../../database/typeorm/data_source");
class NotificationRepository {
    async create(data) {
        const notificationRepository = data_source_1.AppDataSource.getRepository(Notification_1.NotificationDTO);
        const notification = notificationRepository.create(data);
        const results = await notificationRepository.save(notification);
        return results;
    }
    async findAll(pageNumber) {
        const perPage = 20;
        const notificationRepository = data_source_1.AppDataSource.getRepository(Notification_1.NotificationDTO);
        const [notifications, total] = await notificationRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                title: true,
                body: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        return {
            body: notifications,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.NotificationRepository = NotificationRepository;
//# sourceMappingURL=Notification.js.map