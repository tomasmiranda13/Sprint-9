const express = require("express");
const { listaPrioridades } = require("../controllers/prioridad");
const router = express.Router();

router.get("/listaPrioridades", listaPrioridades);

module.exports = router;
