import { Testimonial } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
  // validar formulario
  const { nombre, correo, mensaje } = req.body;

  const alertas = [];

  if (nombre.trim() === "") {
    alertas.push({ mensaje: "El nombre esta vació" });
  }

  if (correo.trim() === "") {
    alertas.push({ mensaje: "El correo esta vació" });
  }

  if (mensaje.trim() === "") {
    alertas.push({ mensaje: "El mensaje esta vació" });
  }

  if (alertas.length > 0) {
    // consultar testimoniales ya creados o saldra error de longitud porque no los pasamos a la vista
    const testimoniales = await Testimonial.findAll();

    // mostrar la vista con errores
    res.render("testimoniales", {
      pagina: "Testimoniales",
      alertas,
      nombre,
      correo,
      mensaje,
      testimoniales,
    });
  } else {
    // almacenarlo en la base de datos

    try {
      await Testimonial.create({
        nombre,
        correo,
        mensaje,
      });

      res.redirect("/testimoniales");
    } catch (error) {
      console.log(error);
    }
  }
};

export { guardarTestimonial };
