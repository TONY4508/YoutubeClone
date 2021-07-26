import express from "express";
import { join, login, newHome } from "../controllers/userController";
import { Home, Trending } from "../controllers/storyController";

const globalRouter = express.Router();

globalRouter.get("/", Home);
globalRouter.get("/trending", Trending);
globalRouter.get("/new", newHome);
globalRouter.get("/join", join);
globalRouter.get("/login", login);

export default globalRouter;
