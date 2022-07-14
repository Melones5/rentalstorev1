const { Router } = require('express');
const { getCliente,
      getClienteById, 
      createCliente, 
      deleteCliente, 
      updateCliente,
      getProducto 
} = require('../controllers/cliente')

const router = Router();

//cliente
router.get('/cliente', getCliente)
router.get('/cliente/:id_cliente', getClienteById)
router.post('/cliente', createCliente)
router.delete('/cliente/:id_cliente', deleteCliente)
router.put('/cliente/:id_cliente', updateCliente)

//producto 
router.get('/producto', getProducto)

module.exports = router;