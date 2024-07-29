"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var dotenv = require("dotenv");
dotenv.config();
var apiUrl = (_a = process.env.GATSBY_LAMBDA_FUNCTION_URL) !== null && _a !== void 0 ? _a : '';
if (!apiUrl) {
    throw new Error('GATSBY_LAMBDA_FUNCTION_URL environment variable is not defined');
}
var redirectsContent = "/graphql  ".concat(apiUrl, "  200\n");
fs.writeFileSync('_redirects', redirectsContent);
