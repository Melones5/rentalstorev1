const {Pool} = require("pg");

const pool = new Pool({
      user: "postgres",
      password: "1234",
      host: "localhost",
      database: "rentalstore",
      port: 5432
})

module.export = pool;