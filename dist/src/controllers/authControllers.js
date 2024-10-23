"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAccount = createAccount;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = __importDefault(require("../models/users"));
function createAccount(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, name, password } = req.body;
        const user = yield users_1.default.findOne({ email });
        if (user) {
            res.status(409).json({ message: 'Email already exists' });
            return;
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        try {
            const data = yield users_1.default.create({ email, name, password: hashedPassword });
            res.status(201).json({ message: 'User created successfully', data: data });
            return;
        }
        catch (error) {
            if (error.name === 'ValidationError') {
                res.status(422).json({ message: error.message.split(':')[2] });
                return;
            }
            res
                .status(500)
                .json({ message: 'An error occured creating user, try agin.' });
            return;
        }
    });
}
