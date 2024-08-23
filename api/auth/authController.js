import User from "../user/userModel.js";
import { errorHandler } from "../utils/error.js";
import hashPassword from "../utils/hashPassword.js";

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

  const hashedPassword = await hashPassword(password);

  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    next(error);
  }
};
