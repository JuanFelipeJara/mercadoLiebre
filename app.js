const express = require("express");
const path = require("path");

const app = express();

const publicP = path.resolve(__dirname, "./public");
app.use(express.static(publicP));



app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")));
app.post("/", (req, res) => res.sendFile(path.resolve(__dirname, "./views/home.html")));
app.get("/register", (req, res) => res.sendFile(path.resolve(__dirname, "./views/register.html")));
app.get("/login", (req, res) => res.sendFile(path.resolve(__dirname, "./views/login.html")));



app.listen(process.env.PORT || 3000, () => console.log("Servidor local activado en 3000."))