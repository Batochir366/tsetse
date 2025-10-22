import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import webhookRoute from "./routes/webhook.ts";
import connectMongoDB from "./lib/connectDb.ts";

dotenv.config();
connectMongoDB();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from backend");
});
app.use("/webhooks", webhookRoute);

app.listen(8000, () =>
  console.log(`🚀 Backend running on http://localhost:8000`)
);
