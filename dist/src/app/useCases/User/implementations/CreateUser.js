"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const User_1 = require("../../../../domain/entities/User");
const ErrorType_1 = require("../../../../domain/enums/user/ErrorType");
class CreateUserUseCase {
    constructor(userRepository, passwordHasher) {
        this.userRepository = userRepository;
        this.passwordHasher = passwordHasher;
    }
    async execute({ role, email, username, password, }) {
        try {
            const userExist = (await this.userRepository.findByUsername(username));
            if (userExist) {
                return {
                    data: { error: ErrorType_1.UserErrorType.UserAlreadyExists },
                    success: false,
                };
            }
            const hashedPassword = await this.passwordHasher.hashPassword(password);
            const userEntity = User_1.UserEntity.create({
                role,
                email,
                username,
                password: hashedPassword,
            });
            const user = await this.userRepository.create(userEntity);
            return { data: user, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
//# sourceMappingURL=CreateUser.js.map