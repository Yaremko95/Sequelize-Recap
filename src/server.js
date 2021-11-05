import express from "express";
import cors from "cors";
import { testDB } from "./db/index.js";

const server = express();

const { PORT = 5001 } = process.env;

server.use(cors());

server.use(express.json());

server.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}`);
  await testDB();
});

server.on("error", (error) => {
  console.log("Server is stoppped ", error);
});
