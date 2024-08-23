import express from "express";
import dbConnect from "./config/db.js";
import { config } from "./config/config.js";
import globalError from "./middlewares/globalError.js";
import userRoutes from "./user/userRoute.js";
import authRoutes from "./auth/authRoute.js";

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

const startServer = async () => {
  try {
    await dbConnect();
    const port = config.get("port") || 8000;

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (err) {
    console.log("Failed to server start", err);
  }
};

startServer();

app.use(globalError);
