"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var gql = require("apollo-server").gql;
exports.Query = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Query {\n    book(id:Int!): Book,\n    books: [Book],\n    }\n"], ["\n  type Query {\n    book(id:Int!): Book,\n    books: [Book],\n    }\n"])));
var templateObject_1;
//# sourceMappingURL=query.js.map