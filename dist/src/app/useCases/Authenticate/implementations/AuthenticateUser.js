"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateUserUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/Authenticate/AuthenticateUser/ErrorType");
const ErrorType_2 = require("../../../../domain/enums/user/ErrorType");
class AuthenticateUserUseCase {
    constructor(userRepository, refreshTokenRepository, passwordHasher, refreshTokenGenerator) {
        this.userRepository = userRepository;
        this.refreshTokenRepository = refreshTokenRepository;
        this.passwordHasher = passwordHasher;
        this.refreshTokenGenerator = refreshTokenGenerator;
    }
    async execute({ username, password, }) {
        try {
            const user = (await this.userRepository.findByUsername(username));
            if (!user) {
                return { data: { error: ErrorType_2.UserErrorType.UserNotExist }, success: false };
            }
            if (user.role == 'user') {
                return {
                    data: { error: ErrorType_1.AuthenticateUserErrorType.AccessDenied },
                    success: false,
                };
            }
            const matchPassword = await this.passwordHasher.comparePassword(password, user.password);
            if (!matchPassword) {
                return {
                    data: { error: ErrorType_1.AuthenticateUserErrorType.UsernameOrPasswordWrong },
                    success: false,
                };
            }
            const token = await this.refreshTokenGenerator.generateToken(user.id.toString(), false);
            const refreshTokenFound = await this.refreshTokenRepository.findByUserId(user.id);
            if (refreshTokenFound) {
                await this.refreshTokenRepository.delete(user.id);
            }
            const refreshToken = await this.refreshTokenRepository.create(user.id);
            return { data: { token, refreshToken, user }, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.AuthenticateUserUseCase = AuthenticateUserUseCase;
//# sourceMappingURL=AuthenticateUser.js.map