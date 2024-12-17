"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const createProduct_1 = require("../../../infra/services/composers/Product/createProduct");
const deleteProduct_1 = require("../../../infra/services/composers/Product/deleteProduct");
const getProduct_1 = require("../../../infra/services/composers/Product/getProduct");
const getProductById_1 = require("../../../infra/services/composers/Product/getProductById");
const updateProduct_1 = require("../../../infra/services/composers/Product/updateProduct");
const express_2 = require("../../adapters/express");
const ensureAdminAuthorized_1 = require("../middlewares/ensureAdminAuthorized");
const ensureStaffAuthorized_1 = require("../middlewares/ensureStaffAuthorized");
const productRoutes = (0, express_1.Router)();
exports.productRoutes = productRoutes;
productRoutes.post('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, createProduct_1.createProductComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
productRoutes.get('/', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getProduct_1.getProductComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
productRoutes.get('/:id', ensureStaffAuthorized_1.ensureStaffAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, getProductById_1.getProductByIdComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
productRoutes.patch('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, updateProduct_1.updateProductComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
productRoutes.delete('/:id', ensureAdminAuthorized_1.ensureAdminAuthorized, async (request, response) => {
    const adapter = await (0, express_2.expressAdapter)(request, (0, deleteProduct_1.deleteProductComposer)());
    return response.status(adapter.statusCode).json(adapter.body);
});
//# sourceMappingURL=product.js.map