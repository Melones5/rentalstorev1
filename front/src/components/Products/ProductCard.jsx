import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import './index.css'
import { useContext } from 'react'
import CartContext from '../../CartContext'


const ProductCard = ({urlfoto,nombre,descripcion,categoria,precio,id, deleteProduct}) => {
  const {addToCart} = useContext(CartContext);

  return (
    <Card className='product-card h-100' onClick={() => addToCart(nombre,precio,urlfoto,categoria,id,descripcion)}>
      <Card.Img variant="top" src={urlfoto} width="300" height="300" className='product-img'/>
      <Card.Body className="text-center">
        <Card.Title className='product-title'>{nombre}</Card.Title>
        <Card.Text className='product-text'>{descripcion}</Card.Text>
        <Card.Text className='product-text'>{categoria}</Card.Text>
        <Card.Text className='product-price'>${precio}</Card.Text>
        <Button className='product-button' onClick={() => deleteProduct(id)}>Añadir a carrito</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard