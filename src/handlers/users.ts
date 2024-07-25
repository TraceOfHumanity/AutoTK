import {Request, Response} from "express-serve-static-core";
import {CreateUserDto} from "../dtos/CreateUser.dto";
import {CreateUserQueryParams} from "../types/query-params";
import {User} from "../types/response";

export const getUsers = async (req: Request, res: Response) => {
  res.send([]);
};

export const getUserById = async (req: Request, res: Response) => {
  res.send({});
};

export const createUser = async (
  req: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  res: Response<User>
) => {
  return res.status(201).send({
    id: 1,
    username: "test",
    email: "dffddsgsfgfs@dfasdfdasf.com",
  });
};
