import { Router } from "express";
import { VideoController } from "../controllers/video.controllers";

export const videoRouter = Router();

const videoController = new VideoController();

videoRouter.post("/", videoController.create);
videoRouter.get("/", videoController.getMany);
videoRouter.get("/:id", videoController.getOne);
videoRouter.patch("/:id", videoController.update);
videoRouter.delete("/:id", videoController.remove);
