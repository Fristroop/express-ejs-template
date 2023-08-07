import express from "express";
import session from "express-session";
import passport from "passport";

// Local
import { router } from "./routers/router.js";
import { upload } from "./helpers/multer.js";
import { config } from "./config.js";

const app = express();

// Route
app.use(router);

// EJS
app.set("view engine", "ejs");

// Static Files
app.use(express.static("public"));

// Body resolvers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// File Uploads
app.use(upload.any());

// Passport
const sessionConf = {
   secret: process.env.secret_key,
   resave: true,
   saveUninitialized: true,
};
app.use(session(sessionConf));
app.use(passport.initialize());
app.use(passport.session());

// Listen
app.listen(config.port, () =>
   console.log(`Server is running on http://localhost:${config.port}`)
);
