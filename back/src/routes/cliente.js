const { Router } = require('express');
const { getCliente, 
      createCliente, 
      deleteCliente, 
      updateCliente 
} = require('../controllers/cliente')

const router = Router();

//cliente
router.get('/cliente', getCliente)
router.post('/cliente', createCliente)
router.delete('/cliente', deleteCliente)
router.put('/cliente', updateCliente)


module.exports = router;