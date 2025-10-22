import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./lib/connectDb";
import { clerkWebhook } from "./controllers/webhookController";

dotenv.config();
const app = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
connectMongoDB();
app.get("/", (req, res) => {
  res.send("Hello from backend");
});
app.use("/webhooks", clerkWebhook);

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:8080`);
});
