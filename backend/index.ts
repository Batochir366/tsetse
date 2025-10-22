import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import webhookRoute from "./routes/webhook";
import connectMongoDB from "./lib/connectDb";

dotenv.config();
connectMongoDB();

const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello from backend");
});
app.use("/webhooks", webhookRoute);

const port =  8000;
app.listen(port, "0.0.0.0", () =>
  console.log(`🚀 Backend running on http://0.0.0.0:${port}`)
);
