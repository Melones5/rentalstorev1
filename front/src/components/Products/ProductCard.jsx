import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col, Container } from 'react-bootstrap'
import './index.css'
import axios from 'axios';

const ProductCard = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/producto")
      .then((response) => {
        setProductos(response.data);
        console.log(response.data)
      })
      .catch(() => {
        console.log("no anda")
      })
  }, []);

  {
    productos.map((producto) => {
      console.log(producto.id_producto)
    })
  };
  return (
    <Container>
      <Row xs={1} md={2} lg={5} className="g-4">
        {productos.map((producto, key) => {
          return (
            <Col key={producto.id_producto}>
              <Card border="danger" className='product-card'>
                <Card.Img variant="top" src={producto.urlfoto} />
                <Card.Body className="text-center">
                  <Card.Title className='product-title'>{producto.nombre_producto}</Card.Title>
                  <Card.Text className='product-text'>{producto.descripcion_producto}</Card.Text>
                  <Card.Text className='product-price'>{producto.precio}</Card.Text>
                  <Button className='product-button'>Añadir a carrito</Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </Container>
  )
}

export default ProductCard