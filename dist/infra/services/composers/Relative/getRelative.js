"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelativeComposer = getRelativeComposer;
const GetAllRelative_1 = require("../../../../app/useCases/Relative/implementations/GetAllRelative");
const GetRelative_1 = require("../../../../presentation/http/controllers/Relative/implementations/GetRelative");
const Relative_1 = require("../../../repositories/typeorm/Relative");
function getRelativeComposer() {
    const repository = new Relative_1.RelativeRepository();
    const useCase = new GetAllRelative_1.GetAllRelativeUseCase(repository);
    const controller = new GetRelative_1.GetRelativeController(useCase);
    return controller;
}
//# sourceMappingURL=getRelative.js.map