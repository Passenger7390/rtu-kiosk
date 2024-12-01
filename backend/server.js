import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Server is started</h1>");
});

app.listen(4000, () => {
  console.log("Server started at http://localhost:4000");
});
