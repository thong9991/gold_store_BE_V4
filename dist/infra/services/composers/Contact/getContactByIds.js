"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContactByIdsComposer = getContactByIdsComposer;
const GetContactByIds_1 = require("../../../../app/useCases/Contact/implementations/GetContactByIds");
const GetContactByIds_2 = require("../../../../presentation/http/controllers/Contact/implementations/GetContactByIds");
const Contact_1 = require("../../../repositories/typeorm/Contact");
function getContactByIdsComposer() {
    const repository = new Contact_1.ContactRepository();
    const useCase = new GetContactByIds_1.GetContactByIdsUseCase(repository);
    const controller = new GetContactByIds_2.GetContactByIdsController(useCase);
    return controller;
}
//# sourceMappingURL=getContactByIds.js.map