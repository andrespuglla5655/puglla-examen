const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

function sumar(a, b) {
  return a + b;
}
module.exports = { sumar };

app.get("/", (req, res) => {
  res.send("Puglla desplegado correctamente vía CI/CD + Swarm");
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
}
