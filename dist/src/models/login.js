"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const login_1 = __importDefault(require("../@types/models/login"));
exports.default = (sequelize) => {
    login_1.default.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        user: {
            type: sequelize_1.DataTypes.STRING(128),
            unique: true,
            allowNull: false,
        },
        token: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'update_at',
        modelName: 'login',
        tableName: 'login',
    });
    return login_1.default;
};
