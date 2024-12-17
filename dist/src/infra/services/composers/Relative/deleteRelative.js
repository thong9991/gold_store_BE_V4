"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRelativeComposer = deleteRelativeComposer;
const DeleteRelative_1 = require("../../../../app/useCases/Relative/implementations/DeleteRelative");
const DeleteRelative_2 = require("../../../../presentation/http/controllers/Relative/implementations/DeleteRelative");
const Relative_1 = require("../../../repositories/typeorm/Relative");
function deleteRelativeComposer() {
    const repostory = new Relative_1.RelativeRepository();
    const useCase = new DeleteRelative_1.DeleteRelativeUseCase(repostory);
    const controller = new DeleteRelative_2.DeleteRelativeController(useCase);
    return controller;
}
//# sourceMappingURL=deleteRelative.js.map