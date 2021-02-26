"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../../config"));
const login_1 = __importDefault(require("./login"));
const user_1 = __importDefault(require("./user"));
const sequelize = new sequelize_1.Sequelize(config_1.default.DB_NAME, config_1.default.DB_USERNAME, config_1.default.DB_PASSWORD, {
    dialect: 'mysql',
    host: config_1.default.DB_HOST,
    logging: true,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    port: config_1.default.DB_PORT,
});
const db = {
    sequelize,
    Sequelize: sequelize_1.Sequelize,
    Op: sequelize_1.Op,
    Login: login_1.default(sequelize),
    User: user_1.default(sequelize),
};
exports.default = db;
