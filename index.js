//--LIBRERIAS--

const express = require("express");
const bodyParser = require("body-parser");
const prioridades = require("./routes/prioridadRoutes");
const tareas = require("./routes/tareaRoutes");

// Iniciar express--

const app = express();

//--MIDDLEWARE--

app.use(bodyParser.json());

//--DECLARACION DE ENDPOINTS--

app.use("/api", prioridades);
app.use("/api", tareas);

//--Servidor--

app.listen(8005, () => {
  console.log("Servidor levantado y escuchando en el puerto 8005");
});
