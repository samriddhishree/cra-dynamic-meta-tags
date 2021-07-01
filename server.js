const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "SeekerPitch")
      .replace(/__DESCRIPTION__/g, "Testing Seekerpitch")
      .replace(/__IMAGE__/g, "https://seekerpitch.com/static/media/logo.8d0abd02.svg")
      ;

    res.send(data)
  });
});

app.get("/about", (req, res) => {
  const filePath = path.resolve(__dirname, "./build", "index.html");
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return console.log(err);
    }

    data = data
      .replace(/__TITLE__/g, "Seekerpitch")
      .replace(/__DESCRIPTION__/g, "Test page description.");

    res.send(data)
  });
});

app.use(express.static(path.resolve(__dirname, "./build")))

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
