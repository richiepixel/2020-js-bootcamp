"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
var gql = require("apollo-server").gql;
exports.Mutation = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Mutation {\n    saveBook(title:String!, author:String!): Book\n  }\n"], ["\n  type Mutation {\n    saveBook(title:String!, author:String!): Book\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Mutation.js.map