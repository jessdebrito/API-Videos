import { z } from "zod";

/* 
export const createVideoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  genre: z.string().min(1),
  video: z.string().min(1).url(),
});

export const updateVideoSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  genre: z.string().min(1),
  video: z.string().min(1).url(),
}).partial(); 
*/

export const videoSchema = z.object({
  id: z.number().positive(),
  title: z.string().min(1),
  description: z.string().min(1),
  genre: z.string().min(1),
  video: z.string().min(1).url(),
  createdAt: z.date(),
  updatedAt: z.date(),
});
export const createVideoSchema = videoSchema.pick({
  title: true,
  description: true,
  genre: true,
  video: true,
});
export const updateVideoSchema = createVideoSchema.partial();