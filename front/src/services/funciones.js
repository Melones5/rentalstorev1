import axios from 'axios';


//endpoint api
const baseUrl = 'http://localhost:5000'

export async function getProductos(){
      try {
            const response = await axios.get(`${baseUrl}/producto`)
            return response            
      } catch (error) {
            console.log(error)
      }
}

//otra manera de implementar un endpoint que trae productos
/*const getProductoss = async(state) => {
      const peticion = await axios.get("http://localhost:5000/producto")
      state(peticion.data)
      console.log(peticion.data)
}*/

const getClientes = async(state) => {
      const peticion = await axios.get("http://localhost:5000/cliente")
      state(peticion.data)
      console.log(peticion.data)
}

export {
      //getProductos,
      getClientes,
}

