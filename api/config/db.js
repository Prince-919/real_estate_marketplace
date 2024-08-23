import mongoose from "mongoose";
import { config } from "./config.js";

const dbConnect = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });
    mongoose.connection.on("error", (err) => {
      console.error("Error in connecting to database:", err);
    });
    await mongoose.connect(config.get("databaseUrl"));
  } catch (err) {
    console.log("failed to connect to database", err);
    process.exit(1);
  }
};

export default dbConnect;
