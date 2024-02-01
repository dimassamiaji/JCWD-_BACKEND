import { Request, Response, NextFunction } from "express";
import { prisma } from "..";
import { Prisma } from "@prisma/client";

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
        select: {
          name: true,
          location: true,
          Class: {
            select: {
              name: true,
              startAt: true,
              endAt: true,
            },
          },
        },
        // include: {
        //   Class: true,
        // },
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
      await prisma.$transaction(async (prisma) => {
        const newBranch: Prisma.BranchCreateInput = {
          name: req.body.branch_name,
          location: req.body.location,
        };
        const transBranch = await prisma.branch.create({
          data: newBranch,
        });
        const newClass: Prisma.ClassCreateInput = {
          name: req.body.class_name,
          startAt: new Date(req.body.startAt),
          endAt: new Date(req.body.endAt),
          Branch: { connect: transBranch }, 
        };
        await prisma.class.create({
          data: newClass,
        });
      });

      branchController.branchClass(req, res, next);
    } catch (err) {
      next(err);
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
