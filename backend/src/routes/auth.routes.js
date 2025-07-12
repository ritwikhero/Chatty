import express from "express";

const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("signup");
});

router.post("/signin", (req, res) => {
  res.send("signin");
});

router.post("/logout", (req, res) => {
  res.send("logout");
});

export default router;
