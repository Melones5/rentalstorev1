import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import './index.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'

import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { UserAuth } from '../../context/userContext'



const ProductCard = ({ nombre,precio,urlfoto,categoria,id,descripcion,cantidad }) => {

  const navigate = useNavigate();
  const { user } = UserAuth();

  // TODO: mañana arreglar tema de boton en el inicio, para que no permita alquilar si no está logeado
  const { addToCart } = useContext(CartContext)
  //onClick={() => addToCart(nombre,precio,urlfoto,categoria,id,descripcion)}

  //filtro por producto, donde el id del producto es diferente a los que se pasan por parámetros
  // TODO: boton que cuando aprete en agregar se cambie a remover del carrito
  const addProducts = ( nombre,precio,urlfoto,categoria,id,descripcion,cantidad ) => {
    try {
      if (user) {
        addToCart( nombre,precio,urlfoto,categoria,id,descripcion,cantidad )
        Swal.fire({
          position: 'center',
          width: '32em',
          color: '#fff',
          background: '#a571ff',
          icon: 'success',
          iconColor: '#fff',
          title: 'Agregado al carrito  de manera correcta',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2500
        })
        navigate('/cart')
      } else {
        Swal.fire({
          position: 'center',
          width: '32em',
          color: '#fff',
          background: '#f93333',
          icon: 'error',
          iconColor: '#fff',
          title: 'Para agregar al carrito debe estar logeado / registrado en la página',
          showConfirmButton: false,
          timerProgressBar: true,
          timer: 2500
        })
      }
    } catch (error) {
      Swal.fire({
        position: 'center',
        width: '32em',
        color: '#fff',
        background: '#f93333',
        icon: 'error',
        iconColor: '#fff',
        title: 'Para agregar al carrito debe estar logeado / registrado en la página',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      })
    }
  }

  
  return (
    <Card className='product-card h-100'>
      <Link to={`/product-detail/${id}`} style={{textDecoration: "none"}} >
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
      <Button className='product-button' onClick={() => addProducts(nombre,precio,urlfoto,categoria,id,descripcion,cantidad)}>Añadir a carrito</Button>
    </Card>
  )
}

export default ProductCard