import express from "express";
import { clerkWebhook } from "../controllers/webhookController";

const router = express.Router();
router
  .post("/clerk", express.json({ type: "*/*" }), clerkWebhook)
  .get("/", (req, res) => {
    res.send("Webhook endpoint");
  });

export default router;
