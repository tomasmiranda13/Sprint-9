const express = require("express");
const { listaTareas, tareaAdd, tareaUpdate } = require("../controllers/tarea");
const router = express.Router();

router.get("/listaTareas", listaTareas);
router.post("/tareaAdd", tareaAdd);
router.put("/tarea/:id", tareaUpdate);

module.exports = router;
