"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRelativeComposer = createRelativeComposer;
const CreateRelative_1 = require("../../../../app/useCases/Relative/implementations/CreateRelative");
const CreateRelative_2 = require("../../../../presentation/http/controllers/Relative/implementations/CreateRelative");
const Contact_1 = require("../../../repositories/typeorm/Contact");
const Relative_1 = require("../../../repositories/typeorm/Relative");
const Staff_1 = require("../../../repositories/typeorm/Staff");
function createRelativeComposer() {
    const relativeRepostory = new Relative_1.RelativeRepository();
    const staffRepository = new Staff_1.StaffRepository();
    const contactRepository = new Contact_1.ContactRepository();
    const useCase = new CreateRelative_1.CreateRelativeUseCase(relativeRepostory, staffRepository, contactRepository);
    const controller = new CreateRelative_2.CreateRelativeController(useCase);
    return controller;
}
//# sourceMappingURL=createRelative.js.map