const knex = require("../config/knexfile");

const listaPrioridades = async (req, res) => {
  try {
    const resultado = await knex("prioridad");
    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  listaPrioridades,
};
