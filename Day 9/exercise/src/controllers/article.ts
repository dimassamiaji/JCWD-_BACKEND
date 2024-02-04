import { Response, Request, NextFunction } from "express";
import { prisma } from "..";

export const articleController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.article.create({ data: req.body });
    } catch (error) {
      next(error);
    }
  },
  async read(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.article.findMany({
        select: {
          title: true,
          content: true,
          user: {
            select: {
              first_name: true,
              last_name: true,
            },
          },
          article_categories: {
            select: {
              category: {
                select: {
                  category: true,
                },
              },
            },
          },
        },
      });
    } catch (error) {
      next(error);
    }
  },
  async update(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  },
  async delete(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  },
};
