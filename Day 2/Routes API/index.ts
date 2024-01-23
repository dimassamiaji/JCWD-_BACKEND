import express, { Request, Response, Application } from "express";

const PORT = 8003;
const app: Application = express();
app.use(express.json());

app.get("/ab?cd", (req: Request, res: Response) => {
  res.send("ab?cd");
});

app.get("/ab+cd", (req: Request, res: Response) => {
  res.send("ab+cd");
});
app.get("/ab*cd", (req: Request, res: Response) => {
  res.send("ab*cd");
});
app.get("/ab(cd)?e", (req: Request, res: Response) => {
  res.send("ab(cd)?e");
});
app.get("/a/", (req: Request, res: Response) => {
  res.send("/a/");
});
app.get("/.*fly$/", (req: Request, res: Response) => {
  res.send("/.*fly$/");
});

app.listen(PORT, () => {
  console.log("berjalan di port", PORT);
});
