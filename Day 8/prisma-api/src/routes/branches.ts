import express, { Router } from "express";
import { branchController } from "../controllers/branches";

export const route: Router = express.Router();
route.get("/", branchController.read);
route.get("/Name-Location", branchController.selectNameLocation);
route.get("/filter", branchController.filterBranch);

route.get("/:id", branchController.getById);
route.post("/", branchController.create);
route.patch("/:id", branchController.update);
route.delete("/:id", branchController.delete);
