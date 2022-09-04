import React, { Fragment, useEffect, useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import ProductCard from './ProductCard'
import ProductDetail from './ProductDetail'
import axios from 'axios';
import { getProductos } from '../../services/funciones';

import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

// TODO: esto puede servir para controlar que el usuario este logeado para agregar al carrito
import { UserAuth } from '../../context/userContext'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import Slider from './Header_Category/Slider';




const Product = () => {
  const [productos, setProductos] = useState([]);

  // TODO: esto puede servir para controlar que el usuario este logeado para agregar al carrito
  const { user } = UserAuth();
  const navigate = useNavigate();



  const [opcion, setOpcion] = useState('');
  const [tipo, setTipo] = useState('');
  const [search, setSearch] = useState('');

  console.log(search);


  useEffect(() => {
    // TODO: TRAIGO LAS FUNCIONES ESPECÍFICAS DESDE EL ARCHIVO SERVICES
    async function cargarProductos() {
      const response = await getProductos()
      if (response.status === 200) {
        setProductos(response.data)
        console.log(response.data)
      }
    }
    cargarProductos()
  }, []);


  // const ordenarPorMenorPrecio = (array) => {
  //   return (array.sort((a, b) => {
  //       if (a.precio < b.precio)
  //           return -1;
  //       else if (a.precio > b.precio)
  //           return 1;
  //       return 0;
  //   }))
  // }

  // const ordenarPorMayorPrecio = (array) => {
  //   return (array.sort((a, b) => {
  //       if (a.precio > b.precio)
  //           return -1;
  //       else if (a.precio < b.precio)
  //           return 1;
  //       return 0;
  //   }))
  // }


  //filtro por producto, donde el id del producto es diferente a los que se pasan por parámetros
  function deleteProduct(id_producto) {
    try {
      if (user) {
        axios.delete(`http://localhost:5000/producto/${id_producto}`)
        setProductos(productos.filter(producto => producto.id_producto !== id_producto))
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
        navigate('/account')
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

  const handleSearch = async (e) => {
    setSearch(e.target.value);
  }
  const handleSubmitSearch = (e) => {
    e.preventDefault();
  }

  return (
    <Fragment>

      <Container>
        <div>
        <Row className='py-3'>
           {/* busca por categorías */}
           <Col className='pt-1' md="auto" xs={12} lg={4}>
            <div>
              <div className="text-white">Ordenar por categoría</div>
              <select className="form-select" value={tipo} aria-label="Default select example" onChange="">
                <option value="1">Artículos de playa</option>
                <option value="2">Artículos de camping</option>
                <option value="3">Artículos deportivos</option>
                <option value="4">Herramientas</option>
              </select>
            </div>
          </Col>
          
          {/* ordena por nombre y precio */}
          <Col className='pt-1' md="auto" xs={12} lg={4}>
            <div>
              <div>
                <div className="text-white">Ordenar por precio</div>
                <select className="form-select" value={""} aria-label="Default select example" onChange={opc => setOpcion(opc.target.value)}>
                  <option value="1">Mayor precio</option>
                  <option value="2">Menor precio</option>
                </select>
              </div>
            </div>
          </Col>

          {/* búsqueda */}
          <Col className='pt-1' md="auto" xs={12} lg={4}>
            <div className="text-white">Buscá un producto</div>
            <Form onSubmit={handleSubmitSearch}>
              <InputGroup className='main'>
                <Form.Control onChange={handleSearch} className='input-search' placeholder='Buscar producto...'/>
                <a className='icon-search'><i className="fa-solid fa-magnifying-glass"></i></a>
              </InputGroup>
            </Form>
          </Col>
        </Row>
        </div>
      </Container>

      {/* <Slider /> */}

      <Container className='container-product py-5'>
        <Row xs={1} md={2} lg={4} className="g-3">          
          {productos
            .filter((producto) => {
              if (search === '') {
                return producto
              } else if (producto.nombre_producto.toLowerCase().includes(search.toLowerCase())) {
                return producto
              }
            })
            .map((producto, key) => {
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