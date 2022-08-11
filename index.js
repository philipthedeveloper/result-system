const express = require("express");
const app = express();
const dotenv = require("dotenv");
const router = require("./server/routes/router");
const path = require("path");

dotenv.config();
const PORT = process.env.PORT || 5000;

app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));
app.use(express.json({ extended: false }));
app.use("/", router);
app.use("/css", express.static(path.join(__dirname, "assets/css")));
app.use("/js", express.static(path.join(__dirname, "assets/js")));
app.use("/img", express.static(path.join(__dirname, "assets/img")));

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
