import express, { json } from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
import connectMongoDB from "./connectDb";
import usersRouter from "./routes/user";
// import { initWebSocket } from "./websocket";
// import http from "http";

const app = express();

configDotenv();

const port = 8080;

connectMongoDB();

app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use("/user", usersRouter);

// const server = http.createServer(app);
// initWebSocket(server);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
