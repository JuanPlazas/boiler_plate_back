"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_graphql_1 = require("express-graphql");
const graphqlConfig_1 = __importDefault(require("../graphql/graphqlConfig"));
const corsOptions = {
    origin: '*',
};
exports.default = (app) => {
    app.use(cors_1.default(corsOptions));
    app.use('/graphql', express_graphql_1.graphqlHTTP({
        schema: graphqlConfig_1.default.schema,
        graphiql: false,
        rootValue: graphqlConfig_1.default.root,
        pretty: true,
    }));
};
