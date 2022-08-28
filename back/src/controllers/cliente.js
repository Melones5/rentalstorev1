const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  password: "1234",
  host: "localhost",
  database: "rentalstore",
  port: 5432,
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0
})

var admin = require("firebase-admin");
var serviceAccount = require("../rentalstoreSDK.json");

administrador = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

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

/*
const getClienteById = async (req, res) => {
  const id_cliente = req.params.id_cliente;
  const response = await pool.query('SELECT * FROM cliente WHERE id_cliente = $1', [id_cliente]);
  res.status(200).json(response.rows);
  console.log(response);
  // res.json(`CLIENTE ${id_cliente} consultado de manera satisfactoria`)
}*/

const getClienteByEmail = async (req, res) =>{
  try {
    const email = req.params.email;
    const response = await pool.query('SELECT * FROM cliente WHERE email = $1', [email]);
    res.status(200).json(response.rows[0]);
    console.log(response)
  } catch (error) {
    console.error(error.message)
  }
}

//crea el cliente en firebase y lo añade a postgresql 
const createCliente = async (req, res) => {
  try {
    const { uid, nombre, apellido, direccion, telefono, email, password, rol } = req.body;
    const response = await pool.query('INSERT INTO cliente (uuid, nombre, apellido, direccion, telefono, email, password, rol) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id_cliente', [
      uid, nombre, apellido, direccion, telefono, email, password, rol]);
    res.status(200).json(response.rows);
    console.log(response.rows);
    console.log("insertado en postgresql");
  } catch (error) {
    console.error(error.message)
  }
}

const deleteCliente = async (req, res) => {
  const id_cliente = req.params.id_cliente;
  const response = await pool.query('DELETE FROM cliente WHERE id_cliente = $1', [id_cliente]);
  res.status(200).json(response.rows);
  console.log(response);
  // res.json(`CLIENTE ${id_cliente} eliminado de manera satisfactoria`)
}

const updateCliente = async (req, res) => {
  const id_cliente = req.params.id_cliente;
  const { nombre, apellido, direccion, telefono, email, password, rol } = req.body;
  const response = await pool.query('UPDATE cliente SET nombre = $1, apellido = $2, direccion =$3, telefono=$4, email=$5, password=$6, rol=$7 WHERE id_cliente=$8', [
    nombre,
    apellido,
    direccion,
    telefono,
    email,
    password,
    rol,
    id_cliente,
  ]);
  res.status(200).json(response.rows);
  console.log(response);
  // res.json(`CLIENTES ${id_cliente} actualizado de manera satisfactoria`)
}

//productos
const getProducto = async (req, res) => {
  try {
    const response = await pool.query('SELECT * FROM producto');
    console.log(response.rows);
    res.status(200).json(response.rows);
    // res.json(`CLIENTES consultados de manera satisfactoria`)  
  } catch (error) {
    console.error(error.message);
  }
}

const getProductoById = async (req, res) => {
  const id_producto = req.params.id_producto;
  const response = await pool.query('SELECT * FROM producto WHERE id_producto = $1', [id_producto]);
  res.status(200).json(response.rows);
  console.log(response);
  // res.json(`CLIENTE ${id_cliente} consultado de manera satisfactoria`)
}

const createProducto = async (req, res) => {
  try {
    const { nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto, categoria, cliente } = req.body;
    const response = await pool.query('INSERT INTO producto (nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto, categoria, cliente) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING id_producto', [
      nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto, categoria, cliente]);
    res.status(200).json(response.rows);
    console.log(response.rows);
    console.log("insertado en postgresql");
  } catch (error) {
    console.error(error.message)
  }
}

const updateProducto = async (req, res) => {
  const id_producto = req.params.id_producto;
  const { nombre_producto, precio, descripcion_producto, cantidad, estado, urlfoto, categoria } = req.body;
  const response = await pool.query('UPDATE producto SET nombre_producto = $1, precio = $2, descripcion_producto =$3, cantidad=$4, estado=$5, urlfoto=$6, categoria=$7 WHERE id_producto=$8', [
    nombre_producto,
    precio,
    descripcion_producto,
    cantidad,
    estado,
    urlfoto,
    categoria,
    id_producto,
  ]);
  res.status(200).json(response.rows);
  console.log(response);
  // res.json(`CLIENTES ${id_cliente} actualizado de manera satisfactoria`)
}
const deleteProducto = async (req, res) => {
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
  getClienteByEmail,
  //getClienteById,
  createCliente,
  deleteCliente,
  updateCliente,

  getProducto,
  getProductoById,
  createProducto,
  updateProducto,
  deleteProducto,
}