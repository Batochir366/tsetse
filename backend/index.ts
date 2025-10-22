import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./lib/connectDb";
import { clerkWebhook } from "./controllers/webhookController";

dotenv.config();
connectMongoDB;

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from backend");
});
app.use("/webhooks", clerkWebhook);

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
});
