import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import HeaderCategory from '../Header_Category/HeaderCategory'
import Product from '../Products/Product'
import axios from 'axios';



const Home = () => {
  const [clientes, setClientes ] = useState([]);
  
  useEffect(() => {
    axios.get("http://localhost:5000/cliente")
    .then((response) => {
      setClientes(response.data);
    })
    .catch(()=>{
      console.log("no anda")
    })
  }, [])


  return (
    <div className='py-5'>
      {clientes.map((cliente, key) => {
        return(
          <div>
            <ul>
              <li>
                <h2>{cliente.nombre}</h2>
                <h2>{cliente.id_cliente}</h2>
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