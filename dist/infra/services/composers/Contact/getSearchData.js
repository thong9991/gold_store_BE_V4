"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchDataComposer = getSearchDataComposer;
const GetAllSearchData_1 = require("../../../../app/useCases/Contact/implementations/GetAllSearchData");
const GetSearchData_1 = require("../../../../presentation/http/controllers/Contact/implementations/GetSearchData");
const Contact_1 = require("../../../repositories/typeorm/Contact");
function getSearchDataComposer() {
    const repository = new Contact_1.ContactRepository();
    const useCase = new GetAllSearchData_1.GetAllSearchDataUseCase(repository);
    const controller = new GetSearchData_1.GetSearchDataController(useCase);
    return controller;
}
//# sourceMappingURL=getSearchData.js.map