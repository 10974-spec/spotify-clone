import { Router } from "express";

const router = Router();

router.get("/",(req,res) => {
  req.auth.userId
  res.send("Hello World")
})

export default router;
