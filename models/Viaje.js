import Sequilize from "sequelize";
import db from "../config/db.js";

export const Viaje = db.define("viajes", {
  titulo: {
    type: Sequilize.STRING,
  },
  precio: {
    type: Sequilize.STRING,
  },

  fecha_ida: {
    type: Sequilize.DATE,
  },

  fecha_vuelta: {
    type: Sequilize.DATE,
  },

  imagen: {
    type: Sequilize.STRING,
  },

  descripcion: {
    type: Sequilize.STRING,
  },
  disponibles: {
    type: Sequilize.STRING,
  },
  slug: {
    type: Sequilize.STRING,
  },
});
