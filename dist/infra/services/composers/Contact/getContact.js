"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactComposer = getContactComposer;
const GetAllContact_1 = require("../../../../app/useCases/Contact/implementations/GetAllContact");
const GetContact_1 = require("../../../../presentation/http/controllers/Contact/implementations/GetContact");
const Contact_1 = require("../../../repositories/typeorm/Contact");
function getContactComposer() {
    const repository = new Contact_1.ContactRepository();
    const useCase = new GetAllContact_1.GetAllContactUseCase(repository);
    const controller = new GetContact_1.GetContactController(useCase);
    return controller;
}
//# sourceMappingURL=getContact.js.map