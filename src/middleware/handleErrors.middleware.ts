import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";
import { ZodError } from "zod";

export class HandleErrors {
   static execute(
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
   ) {
      if (error instanceof AppError) {
         return response.status(error.statusCode).json({ message: error.message });
      }

      if (error instanceof ZodError) {
         return response.status(400).json(error);
      }

      console.log(error);
      return response.status(500).json({ message: "Internal server error." });
   }
}