import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ProductCard from './ProductCard'
import axios from 'axios';
import { getProductos } from '../../services/funciones';



const Product = () => {
  const [productos, setProductos] = useState([]);


  useEffect(() => {
    // TODO: TRAIGO LAS FUNCIONES ESPECÍFICAS DESDE EL ARCHIVO SERVICES
    async function cargarProductos(){
      const response = await getProductos()
      if (response.status === 200) {
        setProductos(response.data)
        console.log(response.data)
      }
    }
    cargarProductos()
  }, []);

  //filtro por producto, donde el id del producto es diferente a los que se pasan por parámetros
  function deleteProduct(id_producto) {
    axios.delete(`http://localhost:5000/producto/${id_producto}`)
    setProductos(productos.filter(producto => producto.id_producto !== id_producto))
  }

  return (
    <Fragment>
      <Container className='container-product py-5'>
        <input
          type='text'
          className='form-control mx-auto'
          placeholder='Buscá un producto...'
          onChange={""}
          value={""}
        />
        <Row xs={1} md={2} lg={4} className="g-3">
          {productos.map((producto, key) => {
            return (
              <Col key={producto.id_producto}>
                <ProductCard
                  urlfoto={producto.urlfoto}
                  nombre={producto.nombre_producto}
                  descripcion={producto.descripcion_producto}
                  categoria={producto.categoria_producto}
                  precio={producto.precio}
                  id={producto.id_producto}
                  deleteProduct={deleteProduct}
                />
              </Col>
            )
          })}
        </Row>
      </Container>
    </Fragment>
  )
}

export default Product