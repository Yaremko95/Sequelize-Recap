import express from "express";
import cors from "cors";
import { testDB, syncDB } from "./db/index.js";
import classesRouter from "./services/classes/index.js";
import modulesRouter from "./services/modules/index.js";
import teachersRouter from "./services/teachers/index.js";
import studentsRouter from "./services/students/index.js";

const server = express();

const { PORT = 5001 } = process.env;

server.use(cors());

server.use(express.json());

server.use("/classes", classesRouter);
server.use("/modules", modulesRouter);
server.use("/teachers", teachersRouter);
server.use("/students", studentsRouter);

server.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}`);
  await testDB();
  await syncDB();
});

server.on("error", (error) => {
  console.log("Server is stoppped ", error);
});
