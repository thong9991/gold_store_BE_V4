"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 3333;
app_1.app.listen(PORT, () => console.log(`Server is running in http://localhost:${PORT}`));
//# sourceMappingURL=server.js.map