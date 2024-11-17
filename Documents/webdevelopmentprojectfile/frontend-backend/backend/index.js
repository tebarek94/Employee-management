import express, { Router } from "express";
import dotenv from "dotenv";
import router from "./Routes/Routes.api.config.js";
import cors from "cors";
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
app.use("/employee", router);
app.use(cors());

app.listen(port, () => {
  console.log(`Server is running is run on the port http://localhost:${port}`);
});
