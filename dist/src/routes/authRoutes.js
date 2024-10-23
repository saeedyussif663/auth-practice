"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authControllers_1 = require("../controllers/authControllers");
const authRouter = (0, express_1.Router)();
authRouter.post('/register', authControllers_1.createAccount);
authRouter.post('/login', (req, res) => {
    res.json({ message: 'Sign in route' });
});
exports.default = authRouter;
