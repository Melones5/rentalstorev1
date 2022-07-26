import React, { Fragment, useEffect, useState} from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ProductCard from './ProductCard'
import axios from 'axios';
import { getProductos } from '../../funciones/funciones';


const Product = () => {

  const [productos, setProductos] = useState([]);
  //const [nombre_producto, setbusquedaNombre] = useState("")
  //const [categoria, setCategoria] = useState([]);

  // const getProductsInCategory = () =>{
  //   return productos.filter((product) => product.categoria === categoria);
  // }

  useEffect(() => {
    // TODO: TRAIGO LAS FUNCIONES ESPECÍFICAS DESDE EL ARCHIVO FUNCIONES
    getProductos(setProductos)
    /* 
    axios.get("http://localhost:5000/producto")
      .then((response) => {
        setProductos(response.data);
        console.log(response.data);
      })
      .catch(() => {
        console.log("no anda")
      })*/
  }, []);

  //filtro por producto, donde el id del producto es diferente a los que se pasan por parámetros
  function deleteProduct(id_producto) {
    axios.delete(`http://localhost:5000/producto/${id_producto}`)
    setProductos(productos.filter(producto => producto.id_producto !== id_producto))
  }

  
  /*function serachCategory(categoria) {
    setCategorias(productos.filter(producto => producto.categoria === categoria))
  }*/

  /*const mappedResults = Object.keys(productos).map(key =>{
    const value = productos[key]
    console.log(key, 'y', value)
  })

  for (let i = 0; i <productos.length; i++){
    if(productos[i].categoria === 1){
      console.log(productos[i])
    }
  }

  const categoriaResult = productos.filter(function (producto){
    if(producto.categoria === 1){
      return true
    }
    if(producto.categoria === 2){
      return true
    }
    if(producto.categoria === 3){
      return true
    }
  })
  console.log(categoriaResult)*/



  return (
    <Fragment>
      <Container className='container-product py-5'>
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