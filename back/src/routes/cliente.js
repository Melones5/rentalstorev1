const { Router } = require('express');
const { getCliente,
      getClienteByEmail,
      //getClienteById, 
      createCliente, 
      deleteCliente, 
      updateCliente,
      getProducto,
      getProductoCliente,
      getProductoById,
      createProducto,
      updateProducto,
      deleteProducto, 
} = require('../controllers/cliente')

const router = Router();

//cliente
router.get('/cliente', getCliente)
router.get('/cliente/:email', getClienteByEmail)
//router.get('/cliente/:id_cliente', getClienteById)
router.post('/cliente', createCliente)
router.delete('/cliente/:uid', deleteCliente)
router.put('/cliente/:id_cliente', updateCliente)

//producto 
router.get('/producto', getProducto)
router.get('/producto/productos_alquiler/:cliente', getProductoCliente)
router.get('/producto/:id_producto', getProductoById)
router.post('/producto', createProducto)
router.delete('/producto/:id_producto', deleteProducto)
router.put('/producto/:id_producto', updateProducto)

module.exports = router;