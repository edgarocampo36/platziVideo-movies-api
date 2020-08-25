//llamar express
const express = require("express");
//crear la app con express
const app = express();
//llamar el archivo de configuracion
const { config } = require("./config/index");
//crear ruta con la app creada con express pasando el path y el callback con el request/response
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/json", (req, res) => {
  res.json({ hello: "world" });
});

app.get("/:year", (req, res) => {
  const year = parseInt(req.params.year);
  if (year % 4 === 0) {
    res.send(`El año ${year} es biciesto`);
  } else {
    res.send(`El año ${year} no es biciesto`);
  }
});

//para correr el servidor debe escuchar en un puerto, lo traemos del archivo config.port
app.listen(config.port, () => {
  console.log(`Listening http://localhost:${config.port}`);
});
