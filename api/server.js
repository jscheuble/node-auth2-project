const express = require("express");
const helmet = require("helmet");

const authRouter = require("../auth/auth-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/auth", authRouter);

server.get("/", (req, res) => {
  res.json({ api: "running" });
});

module.exports = server;
