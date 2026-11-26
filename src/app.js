import dotenv from "dotenv";
import { validateEnv } from "./config/env.config.js";

dotenv.config();
validateEnv();