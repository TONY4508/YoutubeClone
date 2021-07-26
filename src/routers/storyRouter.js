import express from "express";
import { edit, see, deleteVideo } from "../controllers/storyController";

const storyRouter = express.Router();

storyRouter.get("/:id", see);
storyRouter.get("/:id/edit", edit);
storyRouter.get("/:id/delete", deleteVideo);

export default storyRouter;
