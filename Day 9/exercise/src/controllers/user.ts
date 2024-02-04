import { Response, Request, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";

export const userController = {
  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, first_name, last_name, gender } = req.body;
      const newUser: Prisma.UserCreateInput = {
        email,
        password,
        first_name,
        last_name,
        gender,
      };
      const checkUser = await prisma.user.findMany({
        where: {
          email,
        },
      });

      if (checkUser.length > 0) throw Error("user sudah terdaftar");

      await prisma.user.create({
        data: req.body,
      });
    } catch (error) {}
  },
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.query;
      const user = await prisma.user.findMany({
        where: {
          email: String(email),
          password: String(password),
        },
      });

      if (user.length == 0) throw Error("email/password salah");

      res.send({
        success: true,
        result: user,
      });
    } catch (error) {
      next(error);
    }
  },
};
