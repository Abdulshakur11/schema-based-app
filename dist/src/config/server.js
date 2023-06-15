"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerConfig = void 0;
const dotenv = require("dotenv");
const env = require("env-var");
dotenv.config();
exports.ServerConfig = {
    env: env.get('ENVIRONMENT').required().asString(),
    port: env.get('SERVER_PORT').required().asPortNumber()
};
//# sourceMappingURL=server.js.map