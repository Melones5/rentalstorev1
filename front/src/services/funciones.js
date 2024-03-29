import axios from 'axios';

// import {UserAuth} from '../context/userContext'
// const {user} = UserAuth();


//endpoint api
const baseUrl = 'http://localhost:5000'

export async function getProductos() {
  try {
    const response = await axios.get(`${baseUrl}/producto`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function postProductos(){
  try {
    const response = await axios.post(`${baseUrl}/producto`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function getClienteByEmail(email) {
  try {
    const response = await axios.get(`${baseUrl}/cliente/${email}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function getProductoCliente(cliente) {
  try {
    const response = await axios.get(`${baseUrl}/producto/productos_alquiler/${cliente}`)
    return response
  } catch (error) {
    console.log(error)
  }
}

export async function updateCliente(){
  try {
    
  } catch (error) {
    console.log(error)
  }
}

export async function putClientes() {
  try {
    const response = await axios.get(`${baseUrl}/cliente`)
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
}

const getClientes = async(state) => {
      const peticion = await axios.get("http://localhost:5000/cliente")
      state(peticion.data)
      console.log(peticion.data)
}*/

// export {
//       //getProductos,
//       getClientes,
// }

