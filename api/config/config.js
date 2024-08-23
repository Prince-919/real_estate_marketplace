import dotenv from "dotenv";
dotenv.config();

const _config = {
  port: process.env.PORT,
  databaseUrl: process.env.MONGO_CONNECTION_STRING,
};

export const config = {
  get(key) {
    const value = _config[key];
    if (!value) {
      console.log(
        `The ${key} variable not found, Make sure to pass enviroment variable`
      );
      process.exit();
    }
    return value;
  },
};
