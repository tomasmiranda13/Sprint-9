const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "admin",
    port: 5433,
    password: "1234",
    database: "Sprint9",
  },
});

module.exports = knex;
