import React, { useEffect, useState } from 'react'
import SearchBar from '../Products/SearchBar/SearchBar'
//import Slider from '../Products/Header_Category/Slider'
//import HeaderCategory from '../Products/Header_Category/HeaderCategory'
import Product from '../Products/Product'


const Home = () => {

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