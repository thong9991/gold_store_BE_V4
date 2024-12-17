"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const app_1 = require("firebase-admin/app");
const gold_store_eced9_firebase_adminsdk_z2o81_3d382436c4_json_1 = __importDefault(require("../../../../gold-store-eced9-firebase-adminsdk-z2o81-3d382436c4.json"));
const data_source_1 = require("../../../infra/database/typeorm/data_source");
const admin_1 = require("../routers/admin");
const asset_1 = require("../routers/asset");
const authenticate_1 = require("../routers/authenticate");
const cashDrawer_1 = require("../routers/cashDrawer");
const cashFlow_1 = require("../routers/cashFlow");
const contact_1 = require("../routers/contact");
const goldPrice_1 = require("../routers/goldPrice");
const notification_1 = require("../routers/notification");
const order_1 = require("../routers/order");
const product_1 = require("../routers/product");
const profile_1 = require("../routers/profile");
const relative_1 = require("../routers/relative");
const staff_1 = require("../routers/staff");
const user_1 = require("../routers/user");
const vendor_1 = require("../routers/vendor");
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
data_source_1.DataWarehouse.initialize()
    .then(() => {
    console.log('Data Warehouse has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Warehouse initialization:', err);
});
(0, app_1.initializeApp)({
    credential: firebase_admin_1.default.credential.cert({
        projectId: gold_store_eced9_firebase_adminsdk_z2o81_3d382436c4_json_1.default.project_id,
        clientEmail: gold_store_eced9_firebase_adminsdk_z2o81_3d382436c4_json_1.default.client_email,
        privateKey: gold_store_eced9_firebase_adminsdk_z2o81_3d382436c4_json_1.default.private_key,
    }),
    projectId: gold_store_eced9_firebase_adminsdk_z2o81_3d382436c4_json_1.default.project_id,
});
const app = (0, express_1.default)();
exports.app = app;
const corsOptions = {
    origin: '*',
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use('/users', user_1.userRoutes);
app.use('/auth', authenticate_1.authenticateRoutes);
app.use('/admin', admin_1.adminUserRoutes);
app.use('/vendors', vendor_1.vendorRoutes);
app.use('/products', product_1.productRoutes);
app.use('/prices', goldPrice_1.goldPriceRoutes);
app.use('/orders', order_1.orderRoutes);
app.use('/drawers', cashDrawer_1.cashDrawerRoutes);
app.use('/assets', asset_1.assetRoutes);
app.use('/cash_flows', cashFlow_1.cashFlowRoutes);
app.use('/contacts', contact_1.contactRoutes);
app.use('/staffs', staff_1.staffRoutes);
app.use('/relatives', relative_1.relativeRoutes);
app.use('/profile', profile_1.profileRoutes);
app.use('/notifications', notification_1.notificationRoutes);
//# sourceMappingURL=app.js.map