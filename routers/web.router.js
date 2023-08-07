import express from "express";

const app = express.Router();
export const WEBRouter = app;

app.get("/", (req, res) => {
    res.render("index", {
        title: "Home"
    })
});

