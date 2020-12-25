import { Request, Response } from "express";
import { QueryResult } from "pg";
import { pool } from "../database";

export const getUsers = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const response: QueryResult = await pool.query("SELECT * FROM USERS");
		return res.status(200).json(response.rows);
	} catch (e) {
		return res.status(500).json("Internal server error");
	}
};

export const getUserById = async (
	req: Request,
	res: Response
): Promise<Response> => {
	try {
		const _id = parseInt(req.params.id);
		const response: QueryResult = await pool.query(
			"SELECT * FROM USERS WHERE ID = $1",
			[_id]
		);
		return res.status(200).json(response.rows);
	} catch (e) {
		return res.status(500).json("Internal server error");
	}
};

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
