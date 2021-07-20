import express from "express";

const PORT = 4000;

// step 1. we create application
const app = express();
const handleHome = (req, res) => {
  return res.sendFile(__dirname + "/index.html");
};
const handleLogin = (req, res) => {
  return res.sendFile(__dirname + "/login.html");
};
const handleAbout = (req, res) => {
  return res.sendFile(__dirname + "/about.html");
};
const handleContact = (req, res) => {
  return res.sendFile(__dirname + "/contact.html");
};

// req is request object , res is response object.
// name doesn't matter by itself, but I have to use both in same time.

// step 2.  we are going to configure application
app.get("/", handleHome);
app.get("/login", handleLogin);
app.get("/about", handleAbout);
app.get("/contact", handleContact);
// step 3. we listen from external connection
const handleListening = () =>
  console.log("server listening on port http://localhost:${PORT} 🤞");

app.listen(PORT, handleListening);
