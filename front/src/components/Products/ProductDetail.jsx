import React, { Fragment, useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios';
import './ProductDetail.css';

import { UserAuth } from '../../context/userContext'

const ProductDetail = () => {
  const { id_producto } = useParams();


  const { user } = UserAuth();

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
                    <h3 className='detail-h3'> <i className="fa-solid fa-star"></i> Calificación</h3>
                    <p className='p-text'>ACÁ IRÍAN LAS ESTRELLITAS</p>
                    <p className='p-text'>Cantidad unidades : <input type="number" onChange={e => setValor(e.target.value)} name="quantity" defaultValue="1" min="1" max={item.cantidad} /></p>
                    <button className='detail-button'>Añadir a carrito <i className="fa-solid fa-cart-shopping"></i> </button>
                  </div>
                </Col>
              </>
            )
          })}
        </Row>
      </Container>


      {/* // TODO: falta desarrollar este featuring, donde se agregan los comentarios de los clientes, y propietarios
       Ver si está bien aplicado el ternario para controlar usuario 
      */}
      <Container>
        <h3 className='detail-h3 mt-5 mb-5'>¿Tenés preguntas sobre el producto?</h3>
        {
          user ?
            <>
              <textarea name="" id="" cols="30" rows="10">

              </textarea>
              <div>
                <button>Enviar pregunta</button>
              </div>
            </>
            :
            <>
              <p className='p-text'>Iniciá sesión en tu cuenta para poder hacer una pregunta</p>
              <Link to={"/login"}>
                <button className='detail-login-button'> <i className="fa-solid fa-user"></i> Iniciar sesión</button>
              </Link>
            </>
        }
        <ul className='detail-ul'>
          <h3 className='detail-h3 mt-5 mb-5'><i className="fa-solid fa-comment-dots"></i> Otros usuarios comentaron</h3>
          <li className='li-comment'>
            <Row className='row-comment'>
              <Col xs={12} md={1} lg={2} className='center'>
                <i className="fa-solid fa-user"></i>
              </Col>
              <Col xs={12} md={11} lg={10}>
                <p className='p-text'>En que condiciones se encuentra el producto?</p>
                <p className='p-li-date'>30/08/22</p>
              </Col>
            </Row>
          </li>
          <li className='li-comment'>
            <Row className='row-comment-owner'>
              <Col xs={12} md={1} lg={2} className='center'>
                <i className="fa-solid fa-user"></i>
              </Col>
              <Col xs={12} md={11} lg={10}>
                <p className='p-text'>Hola Pyrke,
                  gracias por su consulta.
                  Le comento que el producto está en excelentes condiciones
                  para su uso normal, en cualquier superficie
                  por el momento tenemos 1 en stock.
                  Saludos cordiales.
                </p>
                <p className='p-li-date'>30/08/22</p>
              </Col>
            </Row>
          </li>
        </ul>
      </Container>
    </Fragment>
  )
}

export default ProductDetail