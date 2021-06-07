const express = require("express")
const path = require("path")
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "main.html"))
})

app.get("/commands", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "commands.html"))
})

app.get("/test", (req, res) => {
  res.sendFile(path.join(__dirname, ".", "setup.html"))
})

app.use(function(req, res) {
  res.status(404).sendFile(path.join(__dirname, ".", "404.html")) //put the path to 404.html here or it wont work - That is my path because i used repl.it
})

app.listen(3000)