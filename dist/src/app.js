"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("../config"));
const models_1 = __importDefault(require("./models"));
const graphqlRotes_1 = __importDefault(require("./server/graphqlRotes"));
const app = express_1.default();
app.set('port', config_1.default.PORT);
graphqlRotes_1.default(app);
models_1.default.sequelize.sync();
exports.default = app;
