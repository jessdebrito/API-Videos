import express, { json } from "express";
import { videoRouter } from "./routes/video.route";

export const app = express();

app.use(json());

app.use("/movies", videoRouter)