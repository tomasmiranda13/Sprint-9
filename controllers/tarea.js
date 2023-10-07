const knex = require("../config/knexfile");

const listaTareas = async (req, res) => {
  try {
    const resultado = await knex("tarea");
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const tareaAdd = async (req, res) => {
  const { titulo, prioridad_id, usuario_id, completado } = req.body;
  try {
    await knex("public.tarea").insert({
      titulo: titulo,
      prioridad_id: prioridad_id,
      usuario_id: usuario_id,
      completado: completado,
    });
    res.status(200).json({ mensaje: "Se añadio correctamente la tarea" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const tareaUpdate = async (req, res) => {
  const { completado } = req.body;
  try {
    const id = Number(req.params.id);
    await knex("public.tarea").where({ id: id }).update({
      completado: completado,
    });
    res.status(200).json({ mensaje: "Se modifico correctamente la tarea" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  listaTareas,
  tareaAdd,
  tareaUpdate,
};
