import { Router } from "express";
import { VideoController } from "../controllers/video.controllers";
import { IsCreateVideoBodyValid } from "../middleware/isCreateVideoBodyValid";
import { IsVideoIdValid } from "../middleware/isVideoIdValid.middleware";


export const videoRouter = Router();

const videoController = new VideoController();

videoRouter.post("/", IsCreateVideoBodyValid.execute, videoController.create);
videoRouter.get("/", videoController.getMany);
videoRouter.get("/:id", videoController.getOne);
videoRouter.patch("/:id", IsVideoIdValid.execute, videoController.update);
videoRouter.delete("/:id", IsVideoIdValid.execute, videoController.remove);
