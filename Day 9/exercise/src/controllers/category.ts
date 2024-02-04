import { Response, Request, NextFunction } from "express";

export const categoryController = {
  create(req: Request, res: Response, next: NextFunction) {
    res.send("test");
  },
  read(req: Request, res: Response, next: NextFunction) {
    res.send("test");
  },
  update(req: Request, res: Response, next: NextFunction) {
    res.send("test");
  },
  delete(req: Request, res: Response, next: NextFunction) {
    res.send("test");
  },
};
