import express from "express";
import { WEBRouter } from "./web.router.js";
import { APIRouter } from "./api.router.js";

const app = express.Router();
export const router = app;

app.use("/", WEBRouter)
app.use("/api", APIRouter)