"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createContactComposer = createContactComposer;
const CreateContact_1 = require("../../../../app/useCases/Contact/implementations/CreateContact");
const CreateContact_2 = require("../../../../presentation/http/controllers/Contact/implementations/CreateContact");
const Contact_1 = require("../../../repositories/typeorm/Contact");
function createContactComposer() {
    const repostory = new Contact_1.ContactRepository();
    const useCase = new CreateContact_1.CreateContactUseCase(repostory);
    const controller = new CreateContact_2.CreateContactController(useCase);
    return controller;
}
//# sourceMappingURL=createContact.js.map