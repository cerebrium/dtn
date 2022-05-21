import express, { Router } from "express";

const router = express.Router();

router.get("/lightning", (req: Express.Request, res) => {
  res.send("lightning strike");
});

export default router;
