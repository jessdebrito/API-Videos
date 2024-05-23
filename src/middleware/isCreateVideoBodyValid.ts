import { NextFunction, Request, Response } from "express";
import { createVideoSchema } from "../schemas/video.schema";

export class IsCreateVideoBodyValid {
  static execute(request: Request, response: Response, next: NextFunction) {
    createVideoSchema.parse(request.body)
    
    next();
  }
}
