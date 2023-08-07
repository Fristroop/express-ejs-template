import express from "express";

const app = express.Router();
export const APIRouter = app;

app.get("/", (req, res) => {
   res.send({ message: "True" });
});

app.post("/test", (req, res) => {
   console.log(req.body);
   console.log(req.files);
   res.redirect("/");
});
