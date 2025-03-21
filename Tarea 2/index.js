const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "web")));

app.get("/info", (req, res) => {
  res.json({
    nombre: "Edmy Marleny Mendoza Pol",
    carnet: "201901212",
    curso: "Análisis Y Diseño de Sistemas 1 A",
  });
});

app.listen(80, () => {
  console.log("Servidor corriendo en el puerto 80");
});
