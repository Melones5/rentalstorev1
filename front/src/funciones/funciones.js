import axios from 'axios';

const getProductos = async(state) => {
      const peticion = await axios.get("http://localhost:5000/producto")
      state(peticion.data)
      console.log(peticion.data)
}

const getClientes = async(state) => {
      const peticion = await axios.get("http://localhost:5000/cliente")
      state(peticion.data)
      console.log(peticion.data)
}

export {
      getProductos,
      getClientes,
}

