"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// IMPORTS
const express_1 = __importDefault(require("express"));
const mongoose = require('mongoose');
const morgan = require('morgan');
const api = require('./api');
const staticFiles = require('./static');
require('dotenv-flow').config();
const DB = process.env.DB_ATLAS.replace('<PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
}).then(con => {
    console.log(con.connections);
});
// APP
const app = express_1.default();
// MIDDLEWARE
app.use(morgan('dev'));
app.use(express_1.default.json());
// STATIC
app.use('/', staticFiles);
app.use(express_1.default.static(`${__dirname}/public`));
// ROUTERS
app.use('/api/users', api.users);
app.use((req, res) => {
    res.status(404).send('Page not found!');
});
module.exports = app;
//# sourceMappingURL=app.js.map