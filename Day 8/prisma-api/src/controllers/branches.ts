import { Request, Response, NextFunction } from "express";
import { prisma } from "..";

export const branchController = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.branch.create({
        data: req.body,
      });
      return res.status(201).send({
        success: true,
        message: "data branch berhasil dibuat",
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async read(req: Request, res: Response, next: NextFunction) {
    try {
      const branch = await prisma.branch.findMany();
      return res.send({
        success: true,
        result: branch,
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async filterBranch(req: Request, res: Response, next: NextFunction) {
    try {
      const branch = await prisma.branch.findMany({
        where: {
          name: {
            contains: String(req.query.name),
          },
          location: {
            contains: String(req.query.location),
          },
        },
      });
      res.send({
        success: true,
        result: branch,
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async branchClass(req: Request, res: Response, next: NextFunction) {
    try {
      const branch = await prisma.branch.findMany({
        include: {
          Class: true,
        },
      });
      res.send({
        success: true,
        result: branch,
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async addClassAndBranch(req: Request, res: Response, next: NextFunction) {
    try {
      const trans = await prisma.$transaction(async (prisma) => {
        const newBranch = {
          name: req.body.branch_name,
          location: req.body.location,
        };
        const transBranch = await prisma.branch.create({
          data: req.body,
        });
        const newClass = {
          name: req.body.class_name,
          startAt: req.body.startAt,
          endAt: req.body.startOut,
          branchId: transBranch.id,
        };
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async paging(req: Request, res: Response, next: NextFunction) {
    try {
      const branch = await prisma.branch.findMany({
        skip: Number(req.query.page),
        take: 1,
      });
      res.send({
        success: true,
        result: branch,
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async selectNameLocation(req: Request, res: Response, next: NextFunction) {
    try {
      const branch = await prisma.branch.findMany({
        select: {
          name: true,
          location: true,
        },
      });
      res.send({
        success: true,
        result: branch,
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const branch = await prisma.branch.findUnique({
        where: {
          id: Number(req.params.id),
        },
      });
      res.send({
        success: true,
        result: branch,
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async update(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.branch.update({
        data: req.body,
        where: {
          id: Number(req.params.id),
        },
      });
      res.send({
        success: true,
        message: "data berhasil diupdate",
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },

  async delete(req: Request, res: Response, next: NextFunction) {
    try {
      await prisma.branch.delete({
        where: {
          id: Number(req.params.id),
        },
      });
      res.send({
        success: true,
        Message: "data berhasil dihapus",
      });
    } catch (err) {
      if (err instanceof Error) throw Error(err.message);
    }
  },
};
