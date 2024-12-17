"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../../../domain/dtos/User/User");
const data_source_1 = require("../../database/typeorm/data_source");
class UserRepository {
    async create(data) {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        const user = userRepository.create(data);
        const results = await userRepository.save(user);
        return results;
    }
    async update(user, data) {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        const updatedUser = await userRepository
            .createQueryBuilder('user')
            .update(User_1.UserDTO)
            .set(data)
            .where('id = :id', { id: user.id })
            .returning(['id', 'role', 'email', 'username', 'password', 'updatedAt'])
            .updateEntity(true)
            .execute();
        return updatedUser.raw[0];
    }
    async delete(id) {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        await userRepository.delete({ id: id });
    }
    async deleteByStaffId(staff_id) {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        await userRepository.delete({ staff: { id: staff_id } });
    }
    async findById(id) {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        const user = await userRepository.findOneBy({
            id: id,
        });
        return user;
    }
    async findByUsername(username) {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        const user = await userRepository.findOneBy({
            username: username,
        });
        return user;
    }
    async findByEmail(email) {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        const user = await userRepository.findOneBy({
            email: email,
        });
        return user;
    }
    async findAllFcmToken() {
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        const fcmTokens = await userRepository.find({
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                fcmToken: true,
            },
        });
        return fcmTokens;
    }
    async findAll(pageNumber) {
        const perPage = 4;
        const userRepository = data_source_1.AppDataSource.getRepository(User_1.UserDTO);
        const [users, total] = await userRepository.findAndCount({
            take: perPage,
            skip: Math.ceil((pageNumber - 1) * perPage),
            order: {
                id: 'DESC',
            },
            select: {
                id: true,
                role: true,
                email: true,
                username: true,
                staff: {
                    id: true,
                    firstName: true,
                    lastName: true,
                },
                createdAt: true,
                updatedAt: true,
            },
            relations: ['staff'],
        });
        return {
            body: users,
            total: total,
            page: pageNumber,
            last_page: Math.ceil(total / perPage),
        };
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=User.js.map