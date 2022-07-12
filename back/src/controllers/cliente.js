const pool = require('../db');

const getCliente = async (req, res) => {
      res.send('Hello world');
}

const createCliente = async (req,res) => {
      const { id_cliente, nombre, apellido, direccion, telefono, mail, password, rol} = req.body;
      
      // const result = await pool.query('INSERT INTO cliente (id_cliente, nombre, apellido, direccion, telefono, mail, password, rol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING*', 
      
      console.log(id_cliente, nombre, apellido, direccion, telefono, mail, password, rol);
      res.send('Hello world');
}

const deleteCliente = async (req,res) => {
      res.send('Hello world');
}
const updateCliente = async (req,res) => {
      res.send('Hello world');
}
 
module.exports = {
      getCliente,
      createCliente,
      deleteCliente,
      updateCliente,
}