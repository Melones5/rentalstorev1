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

  //filtro por producto, donde el id del producto es diferente a los que se pasan por parámetros
  function deleteProduct(id_producto) {
    axios.delete(`http://localhost:5000/producto/${id_producto}`)
    setProductos(productos.filter(producto => producto.id_producto !== id_producto))
  }

  {
    productos.map((producto) => {
      console.log(producto.id_producto)
    })
  };
  return (
    <Container className='container-product py-5'>
      <Row xs={1} md={2} lg={4} className="g-3">
        {productos.map((producto, key) => {
          return (
            <Col key={producto.id_producto}>
              <Card className='product-card'>
                <Card.Img variant="top" src={producto.urlfoto} />
                <Card.Body className="text-center">
                  <Card.Title className='product-title'>{producto.nombre_producto}</Card.Title>
                  <Card.Text className='product-text'>{producto.descripcion_producto}</Card.Text>
                  <Card.Text className='product-text'>{producto.categoria_producto}</Card.Text>
                  <Card.Text className='product-price'>${producto.precio}</Card.Text>
                  <Button className='product-button' onClick={() => deleteProduct(producto.id_producto)}>Añadir a carrito</Button>
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