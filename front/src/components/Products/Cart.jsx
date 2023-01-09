import React from 'react'
import { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import CartContext from '../../context/CartContext'
import imgCart from '../../../src/assets/cart.svg'


const Cart = () => {
  const { productos } = useContext(CartContext);

  console.log("esto es un producto", productos)
  if (productos.length === 0) {
    return (
      <Container className='py-5'>
        <Row className="mt-5">
          <Col md={{ span: 6, offset: 3 }} className='text-center text-white'>
            <img style={{ width: '70%' }} src={imgCart} alt="error-404" />
            <h2 className='py-3'>No hay productos en el carrito</h2>
            <p>Vuelve al <Link to="/">Inicio</Link></p>
          </Col>
        </Row>
      </Container>
    )
  } else {
    return (
      <div className='py-5'>
        <Container>
          <Row>
            <caption>Mi carrito</caption>
            <Col xs={12} lg={8}>
              {productos.map((producto) => (
                <Row className='row-products'>
                  <Col xs={12} lg={3} className='m-auto d-block'>
                    <img src={producto.urlfoto} style={{ width: '70%' }} alt="" className='m-auto mb-3 d-block img-thumbnail img-table' />
                  </Col>
                  <Col xs={12} lg={3}>
                    <p className='p-row'><strong>Nombre:</strong> {producto.nombre}</p>
                    <p className='p-row'><strong>Precio:</strong> ${producto.precio}</p>
                    <p className='p-row'> <strong>Unidades:</strong> 
                      <input type="number" name="quantity" defaultValue="1" min="1" max={producto.cantidad} />
                    </p>
                    <p className='p-row'><strong>Total:</strong> $</p>
                  </Col>
                  <Col className='d-flex align-items-start justify-content-end' xs={12} lg={3}>
                    <a href='#' style={{ color: 'red' }}>Eliminar <i className="fa-solid fa-trash"></i></a>
                  </Col>
                </Row>
              ))}
              {/* <Table striped bordered hover variant="light" responsive className='caption-top align-middle'>
                <caption>Mi carrito</caption>
                <thead>
                  <tr>
                    <th>Imágen</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Subtotal</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {productos.map((producto) => (
                    <tr key={producto.id_producto}>
                      <td><img src={producto.urlfoto} alt="" width="50" height="50" className='mx-auto d-block img-thumbnail img-table' /></td>
                      <td>{producto.nombre}</td>
                      <td>{producto.precio}</td>
                      <td>{producto.cantidad}</td>
                    </tr>
                  ))}
                </tbody>
              </Table> */}
            </Col>
            <Col xs={12} lg={4} className='py-5'>
              <Table striped bordered hover variant="light" responsive className='caption-top align-middle'>
                <tr>
                  <th>Total</th>
                  <td>$7000</td>
                </tr>
              </Table>
              <button>Alquilar</button>
            </Col>
          </Row>
        </Container>


        {/* esto estaba antes */}
        {/* {productos.map((producto) => (
          <div>
            <img src={producto.urlfoto} alt="" />
            <h2>{producto.categoria}</h2>
            <h2>{producto.id}</h2>
            <h2>{producto.nombre}</h2>
            <h2>{producto.descripcion}</h2>
            <h2>{producto.precio}</h2>
          </div>
        ))} */}
      </div>
    )
  }
}

export default Cart