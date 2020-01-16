const express = require("express");
const db = require("../database-mongo/index");
const authRoute = require("./Routes/auth");
const events = require("./Routes/events");

const PORT = process.env.PORT || 5000;
var app = express();

app.use(express.json());

app.use("/api/users", authRoute);
app.use("/api/events", events);

app.listen(PORT, function() {
  console.log(`listening, on port ${PORT}`);
});