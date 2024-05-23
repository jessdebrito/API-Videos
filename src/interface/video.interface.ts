
import { z } from "zod";
import { videoSchema } from "../schemas/video.schema";

/* export interface IVideo {
    id: number;
    title: string;
    description: string;
    genre: string;
    video: string;
    createdAt: Date;
    updatedAt?: Date;
  } */

export type TVideo = z.infer<typeof videoSchema>;

export type TCreateVideoData = Pick<
  TVideo,
  "title" | "description" | "genre" | "video"
>;

export type TUpdateVideoData = Partial<TCreateVideoData>;
