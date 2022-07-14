import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import HeaderCategory from '../Header_Category/HeaderCategory'
import Product from '../Products/Product'
import axios from 'axios';



const Home = () => {
  const [clientes, setClientes ] = useState([]);
  const [productos, setProductos] = useState([]);
  
  /*useEffect(() => {
    axios.get("http://localhost:5000/cliente")
    .then((response) => {
      setClientes(response.data);
    })
    .catch(()=>{
      console.log("no anda")
    })
  }, [])*/

  useEffect(() => {
    axios.get("http://localhost:5000/producto")
    .then((response) => {
      setProductos(response.data);
      console.log(response.data)
    })
    .catch(()=>{
      console.log("no anda")
    })
  }, [])

  return (
    <div className='py-5'>
      {productos.map((producto, key) => {
        return(
          <div>
            <ul>
              <li key={producto.id_producto}>
                <h2>{producto.nombre_producto}</h2>
                <h2>{producto.precio}</h2>
                <h2>{producto.descripcion_producto}</h2>
                <h2>{producto.cantidad}</h2>
                <h2>{producto.estado}</h2>
                <h2>{producto.categoria_producto}</h2>
                <img src={producto.urlfoto} alt="" />
              </li>
            </ul>
          </div>
        )
      })}
      <SearchBar />
      {/* <HeaderCategory /> 
      <Product />*/}
    </div>
  )
}

export default Home