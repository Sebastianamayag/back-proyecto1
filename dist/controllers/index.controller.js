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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const database_1 = require("../database");
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield database_1.pool.query("SELECT * FROM USERS");
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json("Internal server error");
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = parseInt(req.params.id);
        const response = yield database_1.pool.query("SELECT * FROM USERS WHERE ID = $1", [_id]);
        return res.status(200).json(response.rows);
    }
    catch (e) {
        return res.status(500).json("Internal server error");
    }
});
exports.getUserById = getUserById;
//export const createUser = async (
//	req: Request,
//	res: Response
//): Promise<Response> => {};
//
//export const updateUser = async (
//	req: Request,
//	res: Response
//): Promise<Response> => {};
//
//export const deleteUser = async (
//	req: Request,
//	res: Response
//): Promise<Response> => {};
