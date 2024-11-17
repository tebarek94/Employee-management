import databaseConnection from "../config/config.databas.js";
import express from "express";
const router = express.Router();
import cors from "cors";
router.use(cors());
router.get("/list", (req, res) => {
  const GetUserData = "SELECT * FROM employee_list";
  databaseConnection.query(GetUserData, (err, result) => {
    if (err) console.log(err);
    res.json(result);
  });
});

export default router;
