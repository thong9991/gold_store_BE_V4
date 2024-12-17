"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RefreshTokenRepository = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
const RefreshToken_1 = require("../../../domain/dtos/Authenticate/RefreshToken");
const data_source_1 = require("../../database/typeorm/data_source");
class RefreshTokenRepository {
    async create(user_id) {
        const refreshTokenRepository = data_source_1.AppDataSource.getRepository(RefreshToken_1.RefreshTokenDTO);
        const expiresIn = (0, dayjs_1.default)()
            .add(user_id < 0 ? 1 : 2, 'hour')
            .unix();
        const refreshToken = refreshTokenRepository.create({
            user_id: user_id,
            expiresIn: expiresIn,
        });
        const results = await refreshTokenRepository.save(refreshToken);
        return results;
    }
    async delete(user_id) {
        const userRepository = data_source_1.AppDataSource.getRepository(RefreshToken_1.RefreshTokenDTO);
        await userRepository.delete({ user_id: user_id });
    }
    async findById(id) {
        const refreshTokenRepository = data_source_1.AppDataSource.getRepository(RefreshToken_1.RefreshTokenDTO);
        const refreshToken = await refreshTokenRepository.findOneBy({
            id: id,
        });
        return refreshToken;
    }
    async findByUserId(user_id) {
        const refreshTokenRepository = data_source_1.AppDataSource.getRepository(RefreshToken_1.RefreshTokenDTO);
        const refreshToken = await refreshTokenRepository.findOneBy({
            user_id: user_id,
        });
        return refreshToken;
    }
}
exports.RefreshTokenRepository = RefreshTokenRepository;
//# sourceMappingURL=RefreshToken.js.map