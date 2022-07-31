const { Router } = require('express');
const { getCliente,
      getClienteById, 
      createCliente, 
      deleteCliente, 
      updateCliente,
      authCliente,
      getProducto,
      getProductoById,
      updateProducto,
      deleteProducto, 
} = require('../controllers/cliente')

const router = Router();

//cliente
router.get('/cliente', getCliente)
router.get('/cliente/:id_cliente', getClienteById)
router.post('/cliente', createCliente)
router.delete('/cliente/:id_cliente', deleteCliente)
router.put('/cliente/:id_cliente', updateCliente)
router.post('/login', authCliente)

//producto 
router.get('/producto', getProducto)
router.get('/producto/:id_producto', getProductoById)
router.delete('/producto/:id_producto', deleteProducto)
router.put('/producto/:id_producto', updateProducto)

module.exports = router;