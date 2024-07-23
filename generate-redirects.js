"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var dotenv = require("dotenv");
dotenv.config();
var apiUrl = process.env.API_URL;
if (!apiUrl) {
    throw new Error('API_URL environment variable is not defined');
}
var redirectsContent = "/graphql  ".concat(apiUrl, "  200\n");
fs.writeFileSync('_redirects', redirectsContent);
