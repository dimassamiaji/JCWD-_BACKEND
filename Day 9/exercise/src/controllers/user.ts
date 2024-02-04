import { Response, Request, NextFunction } from "express";

export const userController = {
  register(req: Request, res: Response, next: NextFunction) {
    res.send("test");
  },
  login(req: Request, res: Response, next: NextFunction) {
    res.send("test");
  },
};
