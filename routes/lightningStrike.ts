import express from "express";
const strikes = require("../lightning");
import assets from "../assets.json";
import { main } from "./utils/index";

const router = express.Router();

router.get("/lightning", (req: Express.Request, res) => {
  main(assets, strikes);
  res.send("lightning strike");
});

export default router;
