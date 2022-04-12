// sintaxis common js
// const express = require("express");
import router from "./routes/index.js";
import express from "express";
import db from "./config/db.js";

import dotenv from "dotenv";
dotenv.config({ path: "variables.env" });

const app = express();

//conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));

// defiir piuerto
const port = process.env.PORT || 4000;
const host = process.env.HOST || "0.0.0.0";

// habilitar PUG
app.set("view engine", "pug");

//obtener el año actual || Middleware
app.use((req, res, next) => {
  const year = new Date();

  res.locals.actualYear = year.getFullYear();
  res.locals.nombresitio = "Agencia de Viajes";

  next();
});

// Agregar body parser para leer los datos de un formulario con metodo POST
app.use(express.urlencoded({ extended: true }));

// definir la carpeta publica
app.use(express.static("public"));

// agregar router
app.use("/", router);

app.listen(port, host, () => {
  console.log(`Iniciando el servidor en el puerto ${port}`);
});
