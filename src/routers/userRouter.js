import express from "express";
import { users, see, editProfile } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
userRouter.get("/:id", see);
userRouter.get("/edit-profile", editProfile);

export default userRouter;
