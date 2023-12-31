import { NextFunction, Response, Request, Router } from "express";
import { Server } from "socket.io";

export interface IRouter {
  setup(): Router
}

export interface IBaseController {
  handler(req: Request, resp: Response, _?: NextFunction): Promise<void>
}

declare module "express-serve-static-core" {
  interface Request {
    requestId: string
    io: Server
  }
}
