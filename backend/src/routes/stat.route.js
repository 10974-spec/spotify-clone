import { Router } from "express";

const router = Router();

router.get("/",(req,res) => {
  res.send("Hello Stat")
})


export default router;
