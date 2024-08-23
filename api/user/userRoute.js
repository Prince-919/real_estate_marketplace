import express from "express";
import { test } from "./userController.js";

const router = express.Router();

router.get("/test", test);

export default router;
