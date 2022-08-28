import React, { Fragment, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id_producto } = useParams();

  console.log(id_producto)

  const [items, setItems] = useState([]);
  const [valor, setValor] = useState();

  useEffect(() => {
    const getProducto = async (id_producto) => {
      const response = await axios.get(`http://localhost:5000/producto/${id_producto}`)
      if (response.status === 200) {
        setItems(response.data)
        console.log(response.data)
      }
    }
    getProducto(id_producto)
  }, [])


  return (
    <Fragment>
      <Container className='py-5'>
        <Row className='py-5'>
          {items.map((item, key) => {
            return (
              <>
                <Col xs={12} md={8} lg={8} className='pb-5'>
                  <img src={item.urlfoto} alt="img_producto" className="mg-flex  mx-auto d-block img-thumbnail" />
                </Col>
                <Col xs={12} md={8} lg={4} className='container-col'>
                  <div className='container-descripcion'>
                    <h3 className='detail-h3'>{item.nombre_producto}</h3>
                    <p className='p-text'>{item.descripcion_producto}</p>
                  </div>
                  <div className='container-detalles'>
                    <h3 className='detail-h3'> <i class="fa-solid fa-file-lines"></i> Detalles del producto</h3>
                    <ul className='detail-ul'>
                      <li>Precio: ${item.precio}</li>
                      <li>Stock: {item.cantidad}</li>
                      <li>Estado: {item.estado}</li>
                      <li>Cliente: {item.cliente}</li>
                    </ul>
                  </div>
                  <div className='container-descripcion'>
                    <h3 className='detail-h3'> <i class="fa-solid fa-star"></i> Calificación</h3>
                    <p className='p-text'>ACÁ IRÍAN LAS ESTRELLITAS</p>
                    <p className='p-text'>Cantidad unidades : <input type="number" onChange={e => setValor(e.target.value)} name="quantity" defaultValue="1" min="1" max={item.cantidad} /></p>
                    <button className='detail-button'>Añadir a carrito <i class="fa-solid fa-cart-shopping"></i> </button>
                  </div>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>
      <Container>
        <h3 className='detail-h3'>  <i class="fa-solid fa-comment-dots"></i> Comentarios sobre el producto</h3>

      </Container>
    </Fragment>
  )
}

export default ProductDetail