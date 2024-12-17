"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateContactComposer = updateContactComposer;
const UpdateContact_1 = require("../../../../app/useCases/Contact/implementations/UpdateContact");
const UpdateContact_2 = require("../../../../presentation/http/controllers/Contact/implementations/UpdateContact");
const Contact_1 = require("../../../repositories/typeorm/Contact");
const User_1 = require("../../../repositories/typeorm/User");
function updateContactComposer() {
    const contactRepository = new Contact_1.ContactRepository();
    const userRepository = new User_1.UserRepository();
    const useCase = new UpdateContact_1.UpdateContactUseCase(contactRepository, userRepository);
    const controller = new UpdateContact_2.UpdateContactController(useCase);
    return controller;
}
//# sourceMappingURL=updateContact.js.map