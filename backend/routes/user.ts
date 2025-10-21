import { createUser, getCurrentUser, getUsers } from "../controllers/user";

import express from "express";

export const usersRouter = express.Router();

usersRouter
  .post("/create-user", createUser)
  .get("/get-users", getUsers)
  .get("/get-current-user", getCurrentUser as any);

export default usersRouter;
