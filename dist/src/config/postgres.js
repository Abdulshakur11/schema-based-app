"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgresConfig = void 0;
const dotenv = require("dotenv");
const env = require("env-var");
dotenv.config();
exports.PostgresConfig = {
    port: env.get('POSTGRES_PORT').required().asPortNumber(),
    host: env.get("POSTGRES_HOST").required().asString(),
    database: env.get("POSTGRES_DB_NAME").required().asString(),
    password: env.get("POSTGRES_PASSWORD").required().asString(),
    user: env.get("POSTGRES_USER").required().asString(),
};
//# sourceMappingURL=postgres.js.map