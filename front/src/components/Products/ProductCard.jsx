import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import './index.css'
import { useContext } from 'react'
import CartContext from '../../CartContext'
import { Link } from 'react-router-dom'


const ProductCard = ({ urlfoto, nombre, descripcion, categoria, precio, id, deleteProduct }) => {
  //const {addToCart} = useContext(CartContext);
  //onClick={() => addToCart(nombre,precio,urlfoto,categoria,id,descripcion)}
  return (
    <Card className='product-card h-100 '>
      <Link to={`/product-detail/${id}`}>
        <Card.Img variant="top" src={urlfoto} width="224px" height="224px" className='product-img'/>
      </Link>
      <Card.Body className="text-center">
        <Card.Title className='product-title'>{nombre}</Card.Title>
        {/* <Card.Text className='product-text'>{descripcion}</Card.Text> */}
        <Card.Text className='product-text'>{categoria}</Card.Text>
      </Card.Body>
      <div className='price-container'>
        <Card.Text className='product-price center'>${precio}</Card.Text>
      </div>
      <Button className='product-button' onClick={() => deleteProduct(id)}>Añadir a carrito</Button>
    </Card>
  )
}

export default ProductCard