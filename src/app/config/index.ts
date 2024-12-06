import exp = require("constants");
import dotenv from "dotenv";
import path = require("path");

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV || "development",
  port: process.env.PORT,
 
};