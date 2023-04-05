const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 5433,
    user: "trees",
    password: "changeme",
    database: "paristrees",
  },
});

module.exports = knex;
