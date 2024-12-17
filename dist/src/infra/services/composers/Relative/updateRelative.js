"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRelativeComposer = updateRelativeComposer;
const UpdateRelative_1 = require("../../../../app/useCases/Relative/implementations/UpdateRelative");
const UpdateRelative_2 = require("../../../../presentation/http/controllers/Relative/implementations/UpdateRelative");
const Relative_1 = require("../../../repositories/typeorm/Relative");
function updateRelativeComposer() {
    const repostory = new Relative_1.RelativeRepository();
    const useCase = new UpdateRelative_1.UpdateRelativeUseCase(repostory);
    const controller = new UpdateRelative_2.UpdateRelativeController(useCase);
    return controller;
}
//# sourceMappingURL=updateRelative.js.map