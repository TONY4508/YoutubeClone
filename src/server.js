import express from "express";

const PORT = 4000;
const app = express();

const logger = (req, res, next) => {
  console.log("${req.method} ${req.url}");
  next();
};

const getTime = (req, res, next) => {
  new Date();
  console.log("Time:" + new Date());
  next();
};

const protectorMiddleware = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    return res.send("<h1>You are not allowed</h1>");
  }
  next();
};

const securityLogger = (req, res, next) => {
  if (req.protocol === "https") {
    console.log("secure");
  }
  console.log("insecure❌");
  next();
};

const handleHome = (req, res) => {
  return res.send("Hello!");
};

const handleProtected = (req, res) => {
  return res.send("Welcome to the privarte lounge");
};

app.use(logger);
app.use(protectorMiddleware);
app.use(getTime);
app.use(securityLogger);
app.get("/", handleHome);
app.get("/protected", handleProtected);

const handleListening = () =>
  console.log("server listening on port http://localhost:${PORT} 🤞");

app.listen(PORT, handleListening);
