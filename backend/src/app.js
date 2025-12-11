import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));


app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "OK", 
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

import reviewRoute from "./routes/review.routes.js";

app.use("/api/v1/review", reviewRoute);

export { app };
