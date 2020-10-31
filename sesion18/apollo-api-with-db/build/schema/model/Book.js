"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var gql = require("apollo-server").gql;
exports.Book = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type Book {\n    id: Int\n    title: String\n    author: String\n  }\n"], ["\n  type Book {\n    id: Int\n    title: String\n    author: String\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=Book.js.map