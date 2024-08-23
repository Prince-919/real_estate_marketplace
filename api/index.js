import express from "express";
import dbConnect from "./config/db.js";
import { config } from "./config/config.js";

const app = express();

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
