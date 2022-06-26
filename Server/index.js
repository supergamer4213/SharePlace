import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"
import postRoutes from "./routes/posts.js";
//8lEbcUk0713962hw

const App = express();
dotenv.config();

App.use(bodyParser.json({ limit: "30mb", extended: true }));
App.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
App.use(cors());

App.use(`/posts`, postRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => App.listen(PORT, () => console.log(`Server Running On PORT: ${PORT}`)))
    .catch((error) => console.log(error.message));
