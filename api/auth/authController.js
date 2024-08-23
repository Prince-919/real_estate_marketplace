import User from "../user/userModel.js";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "All fields are required"));
  }

  const newUser = new User({ username, email, password });

  try {
    await newUser.save();
    res.status(201).json({
      message: "User signed in successfully",
    });
  } catch (error) {
    next(error);
  }
};
