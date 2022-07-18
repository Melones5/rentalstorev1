import React, { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Slider from '../Header_Category/Slider'
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
  }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/producto")
    .then((response) => {
      setProductos(response.data);
      console.log(response.data)
    })
    .catch(()=>{
      console.log("no anda")
    })
  }, [])*/

  return (
    <div className='py-5'>
      <SearchBar />
      {/* <Slider /> */}
      <Product />
      {/* <HeaderCategory /> 
      <Product />*/}
    </div>
  )
}

export default Home