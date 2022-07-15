const {Pool} = require("pg");

const pool = new Pool({
      user: "postgres",
      password: "1234",
      host: "localhost",
      database: "rentalstore",
      port: 5432,
      max:20,
      connectionTimeoutMillis:0,
      idleTimeoutMillis:0
})

//Clientes
const getCliente = async (req, res) => {
      try {
            const response = await pool.query('SELECT * FROM cliente');
            console.log(response.rows); 
            res.status(200).json(response.rows);     
            // res.json(`CLIENTES consultados de manera satisfactoria`)  
      } catch (error) {
            console.error(error.message);
      }
}

const getClienteById = async(req,res) => {
      const id_cliente = req.params.id_cliente;
      const response = await pool.query('SELECT * FROM cliente WHERE id_cliente = $1', [id_cliente]);
      res.status(200).json(response.rows);
      console.log(response);
      // res.json(`CLIENTE ${id_cliente} consultado de manera satisfactoria`)
}

const createCliente = async (req,res) => {
      try {
            const { nombre, apellido, direccion, telefono, email, password, rol} = req.body;
            const response = await pool.query('INSERT INTO cliente (nombre, apellido, direccion, telefono, email, password, rol) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id_cliente', [
            nombre, apellido, direccion, telefono, email, password, rol ]);
            res.status(200).json(response.rows);
            console.log(response.row);
      } catch (error) {
            console.error(error.message);
      } 
      // pool.end();
      // res.status(200).json(response.rows);
      // console.log(response);
      // res.json(`CLIENTE ${id_cliente} creado de manera satisfactoria`)   
}

const deleteCliente = async (req,res) => {
      const id_cliente = req.params.id_cliente;
      const response = await pool.query('DELETE FROM cliente WHERE id_cliente = $1', [id_cliente]);
      res.status(200).json(response.rows);
      console.log(response);
      // res.json(`CLIENTE ${id_cliente} eliminado de manera satisfactoria`)
}
const updateCliente = async (req,res) => {
      const id_cliente = req.params.id_cliente;
      const { nombre, apellido, direccion, telefono, email, password, rol} = req.body;
      const response = await pool.query('UPDATE cliente SET nombre = $1, apellido = $2, direccion =$3, telefono=$4, email=$5, password=$6, rol=$7 WHERE id_cliente=$8',[
            nombre,
            apellido,
            direccion,
            telefono,
            email,
            password,
            rol,
            id_cliente,
      ]);
      console.log(response);
      // res.json(`CLIENTES ${id_cliente} actualizado de manera satisfactoria`)
}
 
const getProducto = async(req,res) => {
      try {
            const response = await pool.query('SELECT * FROM producto');
            console.log(response.rows); 
            res.status(200).json(response.rows);     
            // res.json(`CLIENTES consultados de manera satisfactoria`)  
      } catch (error) {
            console.error(error.message);
      }
}

const deleteProducto = async(req,res) =>{
      try {
            const id_producto = req.params.id_producto;
            const response = await pool.query('DELETE FROM producto WHERE id_producto = $1', [id_producto]);
            res.status(200).json(response.rows);
            console.log(response);
      } catch (error) {
            console.error(error.message);
      }
      // res.json(`CLIENTE ${id_cliente} eliminado de manera satisfactoria`)
}

module.exports = {
      getCliente,
      getClienteById,
      createCliente,
      deleteCliente,
      updateCliente,
      getProducto,
      deleteProducto,
}