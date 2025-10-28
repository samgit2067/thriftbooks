import dotenv from "dotenv";
dotenv.config();

async function globalSetup() {
  console.log("Environment variables loaded");
}

export default globalSetup;