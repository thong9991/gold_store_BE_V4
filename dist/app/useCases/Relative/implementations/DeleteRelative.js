"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRelativeUseCase = void 0;
const ErrorType_1 = require("../../../../domain/enums/relative/ErrorType");
const SuccessType_1 = require("../../../../domain/enums/relative/SuccessType");
class DeleteRelativeUseCase {
    constructor(relativeRepository) {
        this.relativeRepository = relativeRepository;
    }
    async execute(relativeId) {
        try {
            const relativeExist = (await this.relativeRepository.findById(relativeId));
            if (!relativeExist) {
                return {
                    data: { error: ErrorType_1.RelativeErrorType.RelativeNotExist },
                    success: false,
                };
            }
            await this.relativeRepository.delete(relativeId);
            return {
                data: { msg: SuccessType_1.RelativeSuccessType.RelativeDeleted },
                success: true,
            };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.DeleteRelativeUseCase = DeleteRelativeUseCase;
//# sourceMappingURL=DeleteRelative.js.map