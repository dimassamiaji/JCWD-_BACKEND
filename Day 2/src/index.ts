import express, { Request, Response, Application } from "express";

const PORT = 8001;
const app: Application = express();
app.use(express.json());

app.get("/ab?cd", (req, res) )