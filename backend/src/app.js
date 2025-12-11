import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";

const app = express();

const allowedOrigins = [
  "https://fahim.in",
  "https://www.fahim.in",
  "http://localhost:5173",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("❌ Blocked by CORS:", origin);
        callback(new Error("CORS Not Allowed"));
      }
    },
    credentials: true,
  })
);

app.options("*", cors());



app.use(morgan("combined"));
app.use(cookieParser());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

import reviewRoute from "./routes/review.routes.js";

app.use("/api/v1/review", reviewRoute);

export { app };
