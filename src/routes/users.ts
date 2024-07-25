import {Router} from "express";
import {getUserById, getUsers, createUser} from "../handlers/users";

const router = Router();

router.get("/", getUsers);

router.get("/:id", getUserById);

router.post("/", createUser);

export default router;
