import express, { Request, Response, Application, NextFunction } from "express";

const PORT = 8001;
const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("welcome to api");
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send("page not found");
});

app.listen(PORT, () => {
  console.log("berjalan di port", PORT);
});
