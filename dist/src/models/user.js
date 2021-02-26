"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const user_1 = __importDefault(require("../@types/models/user"));
exports.default = (sequelize) => {
    user_1.default.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        },
        type: {
            type: sequelize_1.DataTypes.ENUM('user', 'admin'),
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(128),
            unique: true,
            allowNull: false,
        },
        user: {
            type: sequelize_1.DataTypes.STRING(128),
            unique: true,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING(128),
            allowNull: false,
        },
    }, {
        sequelize,
        createdAt: 'created_at',
        updatedAt: 'update_at',
        modelName: 'User',
        tableName: 'User',
    });
    return user_1.default;
};
