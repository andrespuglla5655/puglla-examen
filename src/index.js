// src/index.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

function sumar(a, b) {
  return a + b;
}
module.exports = { sumar };

app.get("/", (req, res) => {
  res.send("Aplicación desplegada correctamente con CI/CD y Docker Swarm 🎉");
});

if (require.main === module) {
  app.listen(PORT, () => console.log("Server running on port " + PORT));
}
