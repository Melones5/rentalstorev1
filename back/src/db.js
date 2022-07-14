var express = require('express');
var router = express.Router();
var pg = require('pg')

config = {
      user: "postgres",
      password: "1234",
      host: "localhost",
      database: "rentalstore",
      port: 5432
}

/*var pool = new pg.Pool(config);
pool.query('SELECT NOW()', (err, res) => {
  console.log("Conexion Exitosa")
  pool.end()
})

module.exports = config ;

const pool = new Pool({
      user: "postgres",
      password: "1234",
      host: "localhost",
      database: "rentalstore",
      port: 5432
})

module.export = pool;*/