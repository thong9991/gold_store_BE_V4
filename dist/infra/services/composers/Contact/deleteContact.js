"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactComposer = deleteContactComposer;
const DeleteContact_1 = require("../../../../app/useCases/Contact/implementations/DeleteContact");
const DeleteContact_2 = require("../../../../presentation/http/controllers/Contact/implementations/DeleteContact");
const Contact_1 = require("../../../repositories/typeorm/Contact");
const Relative_1 = require("../../../repositories/typeorm/Relative");
const User_1 = require("../../../repositories/typeorm/User");
function deleteContactComposer() {
    const contactRepository = new Contact_1.ContactRepository();
    const relativeRepository = new Relative_1.RelativeRepository();
    const userRepository = new User_1.UserRepository();
    const useCase = new DeleteContact_1.DeleteContactUseCase(contactRepository, relativeRepository, userRepository);
    const controller = new DeleteContact_2.DeleteContactController(useCase);
    return controller;
}
//# sourceMappingURL=deleteContact.js.map