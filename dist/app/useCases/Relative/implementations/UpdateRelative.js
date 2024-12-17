"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRelativeUseCase = void 0;
const Relative_1 = require("../../../../domain/entities/Relative");
const ErrorType_1 = require("../../../../domain/enums/relative/ErrorType");
class UpdateRelativeUseCase {
    constructor(relativeRepository) {
        this.relativeRepository = relativeRepository;
    }
    async execute(relativeId, { name, relationship }) {
        try {
            const relativeExist = (await this.relativeRepository.findById(relativeId));
            if (!relativeExist) {
                return {
                    data: { error: ErrorType_1.RelativeErrorType.RelativeNotExist },
                    success: false,
                };
            }
            const relativeEntity = Relative_1.RelativeEntity.update({
                name,
                relationship,
            });
            const relative = await this.relativeRepository.update(relativeExist, relativeEntity);
            return { data: relative, success: true };
        }
        catch (error) {
            return { data: { error: error.message }, success: false };
        }
    }
}
exports.UpdateRelativeUseCase = UpdateRelativeUseCase;
//# sourceMappingURL=UpdateRelative.js.map