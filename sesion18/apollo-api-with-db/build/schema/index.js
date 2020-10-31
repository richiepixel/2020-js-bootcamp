"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
var gql = require("apollo-server").gql;
var Book_1 = require("./model/Book");
var Mutation_1 = require("./operation/Mutation");
var query_1 = require("./operation/query");
exports.typeDefs = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n", "\n", "\n", "\n"], ["\n", "\n", "\n", "\n"])), Book_1.Book, query_1.Query, Mutation_1.Mutation);
var templateObject_1;
//# sourceMappingURL=index.js.map