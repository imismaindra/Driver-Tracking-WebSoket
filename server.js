const express = require("express");
const app = express();
const WebSocket = require("ws");
const fs = require("fs");
const path = require("path");

// public folder
app.use(express.static("public"));
app.post("/save-route", (req, res) => {
  fs.writeFileSync("route.json", JSON.stringify(req.body));
  res.send("saved");
});
// route.json manual serving
app.get("/route.json", (req, res) => {
  res.sendFile(path.join(__dirname, "route.json"));
});

app.listen(3000, () =>
  console.log("HTTP on http://localhost:3000")
);

// websocket
const wss = new WebSocket.Server({ port: 8080 });
console.log("WS on ws://localhost:8080");

wss.on("connection", (ws) => {
  const route = JSON.parse(fs.readFileSync("route.json", "utf8"));
  let i = 0;

  setInterval(() => {
    if (route.length === 0) return;

    const [lng, lat] = route[i];
    ws.send(JSON.stringify({ lat, lng }));

    i = (i + 1) % route.length;
  }, 1000);
});
