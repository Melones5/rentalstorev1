import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import './EditUser.css';

// TODO: Imports necesarios para utilizar las tablas de material ui
import MUIDataTable from 'mui-datatables'
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material';
import { dark } from '@mui/material/styles/createPalette';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// TODO: imports de lo necesario para hacer post
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

// TODO: imports para obtener el id del usuario logeado
import { UserAuth } from '../../context/userContext'
import { getClienteByEmail, getProductoCliente } from '../../services/funciones';


const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const ProductosEnAlquiler = () => {

  const columns = [
    {
      name: "id_producto",
      label: "ID"
    },
    {
      name: "nombre_producto",
      label: "Nombre"
    },
    {
      name: "precio",
      label: "Precio"
    },
    {
      name: "descripcion_producto",
      label: "Descripción"
    },
    {
      name: "cantidad",
      label: "Cantidad"
    },
    {
      name: "estado",
      label: "Estado"
    },
    {
      name: "urlfoto",
      label: "Imagen",
      options: {
        customBodyRender: (data, dataIndex, rowIndex) => {
          console.log(data)
          return (
            <div>
              <Box
                component="img"
                sx={{ height: 50, width: 50, }}
                alt="Imagen producto"
                src={data}
              />
            </div>
          )
        }
      }
    },
    {
      name: "categoria",
      label: "Categoría"
    },
    {
      name: "Acciones",
      options: {
        customBodyRender: (data, dataIndex, rowIndex) => {
          return (
            <Container>
              <Row>
                <Col>
                  <button onClick={() => console.log(dataIndex)}>
                    <EditIcon />
                  </button>
                </Col>
                <Col>
                  <button onClick={() => console.log(dataIndex)}>
                    <DeleteIcon />
                  </button>
                </Col>
              </Row>
            </Container>
          )
        }
      }
    }
  ]
  const options = {
    responsive: "standard",
    rowsPerPage: 5,
    rowsPerPageOptions: [2, 3, 5],
  }

  // TODO: Usuario logeado y seteo del mismo en el estado clientes
  // Importante entender que si o si un usuario debe estar logeado para agregar productos y obtener el id
  const { user, logout } = UserAuth();
  const [clientes, setClientes] = useState('');

  let navigate = useNavigate();

  // TODO: controles del modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleShow = () => {
    setShow(true);
  }

  const [error, setError] = useState('');


  //para postgresql
  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState('');
  const [estadoProducto, setEstadoProducto] = useState('');
  const [urlProducto, setUrlProducto] = useState('');
  const [categoriaProducto, setCategoriaProducto] = useState('');
  //: TODO: puede ir acá como no, se verá después
  const [clienteProducto, setClienteProducto] = useState('');

  // TODO: acá van el seteo de los productos del cliente logeado

  const [productos, setProductos] = useState([]);


  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        nombre_producto: '',
        precio: '',
        descripcion_producto: '',
        cantidad: '',
        estado: '',
        urlfoto: '',
        categoria: '',
        cliente: '',
      }
    });

  useEffect(() => {
    async function cargarCliente() {
      const response = await getClienteByEmail(user.email)
      if (response.status === 200) {
        setClientes(response.data)
        console.log("data sobre el cliente", response.data)
      }
    }
    cargarCliente()
    cargarProductos()
  }, [user])

  const cargarProductos = async () => {
    const response = await getProductoCliente(user.email)
    if (response.status === 200) {
      setProductos(response.data)
      console.log("productos del cliente", response.data)
    }
  }
  // useEffect(() => {
  //   async function cargarProductos() {
  //     const response = await getProductoCliente(user.email)
  //     if (response.status === 200) {
  //       setProductos(response.data)
  //       console.log("productos del cliente", response.data)
  //     }
  //   }
  //   cargarProductos()
  // }, [user])

  

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setError('');
    console.log("Evento e", e)
    console.log("data", data)
    try {
      data.cliente = user.email;
      axios.post('http://localhost:5000/producto', data)
      Swal.fire({
        position: 'center',
        width: '32em',
        color: '#fff',
        background: '#a571ff',
        icon: 'success',
        iconColor: '#fff',
        title: 'Producto agregado de manera correcta',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 1500
      })
      navigate('/productos_alquiler')
      window.setTimeout(function(){window.location.reload()},1500)
    } catch (error) {
      Swal.fire({
        position: 'center',
        width: '32em',
        color: '#fff',
        background: '#f93333',
        icon: 'error',
        iconColor: '#fff',
        title: 'Error al agregar el producto',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      })
      setError(error.message)
      console.log(error.message)
    }

  }
  

  return (
    <div className='py-5'>
      <div className='py-5'>
        <Button variant="primary" onClick={handleShow}>
          Agregar producto
        </Button>
      </div>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton closeVariant='white'>
          <Modal.Title className='text-white mb-1 form-h1'>Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xs={12} lg={6}>
                <div className='mb-4'>
                  <label className='label-contact'>Nombre:*</label>
                  <input className='form-control my-2' type="text" onChange={(e) => setNombreProducto(e.target.value)} {...register('nombre_producto', {
                    required: true,
                    maxLength: 50
                  })}
                  />
                  {errors.nombre_producto?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo nombre es requerido</p>}
                  {errors.nombre_producto?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener menos de 50 caracteres</p>}
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className='mb-4'>
                  <label className='label-contact'>Precio:*</label>
                  <input className='form-control my-2' type="number" defaultValue="1" min="1" onChange={(e) => setPrecioProducto(e.target.value)}{...register('precio', {
                    required: true,
                    maxLength: 10,
                    minLength: 1,
                  })}
                    placeholder='Ej: 120'
                  />
                  {errors.precio?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo precio es requerido</p>}
                  {errors.precio?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo precio debe tener menos de 10 caracteres</p>}
                  {errors.precio?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo precio debe tener menos de 1 caracter</p>}
                </div>
                {/* <div className='mb-4'>
                  <label className='label-contact'>Precio:*</label>
                  <input className='form-control my-2' type="text" onChange={(e) => setPrecioProducto(e.target.value)}{...register('precio', {
                    required: true,
                    maxLength: 10
                  })} />
                  {errors.precio?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo precio es requerido</p>}
                  {errors.precio?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo precio debe tener menos de 10 caracteres</p>}
                </div> */}
              </Col>
            </Row>
            <div className='mb-4'>
              <label className='label-contact'>Descripcion:*</label>
              <div className="form-outline">
                <textarea class="form-control my-2" id="textoDescripcion" rows="4" type="text" onChange={(e) => setDescripcionProducto(e.target.value)} {...register('descripcion_producto', {
                  required: true,
                  minLength: {
                    value: 4,
                  },
                  maxLength: 255
                })}
                  placeholder='Ej: "Producto que se puede usar en..."'
                >
                </textarea>
                {errors.descripcion_producto?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo Descripción es requerido</p>}
                {errors.descripcion_producto?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo Descripción debe tener al menos 4 letras</p>}
                {errors.descripcion_producto?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo Descripción debe tener menos 255 letras</p>}
              </div>
            </div>
            <Row>
              <Col xs={12} lg={6}>
                <div className='mb-4'>
                  <label className='label-contact'>Cantidad:*</label>
                  <input className='form-control my-2' type="number" defaultValue="1" min="1" onChange={(e) => setCantidadProducto(e.target.value)} {...register('cantidad', {
                    required: true,
                    minLength: {
                      value: 1,
                    },
                    maxLength: 10
                  })}
                    placeholder='Ej: 1'
                  />
                  {errors.cantidad?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo Cantidad es requerido</p>}
                  {errors.cantidad?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo cantidad debe ser al menos 1</p>}
                  {errors.cantidad?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo cantidad menos de 10 caracteres</p>}
                </div>
              </Col>
              <Col xs={12} lg={6}>
                <div className='mb-4'>
                  <label className='label-contact'>Estado del producto:*</label>
                  <input className='form-control my-2' type="text" onChange={(e) => setEstadoProducto(e.target.value)} {...register('estado', {
                    required: true,
                    minLength: {
                      value: 4,
                    },
                    maxLength: 15
                  })}
                    placeholder='Ej: Buen estado'
                  />
                  {errors.estado?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo Estado es requerido</p>}
                  {errors.estado?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo Estado debe tener al menos 4 letras</p>}
                  {errors.estado?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo Estado debe tener menos de 15 caracteres</p>}
                </div>
              </Col>
            </Row>
            <div className='mb-4'>
              <label className='label-contact'>Url del producto:*</label>
              <input className='form-control my-2' type="text" onChange={(e) => setUrlProducto(e.target.value)} {...register('urlfoto', {
                required: true,
                minLength: {
                  value: 4,
                }
              })} />
              {errors.urlfoto?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo Url es requerido</p>}
              {errors.urlfoto?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo Url debe tener al menos 4 letras</p>}
            </div>
            <Row>
              <Col xs={12} lg={6}>
                <div className='mb-4'>
                  <label className='label-contact'>Categoria del producto:*</label>
                  {/* <input className='form-control my-2' type="text" onChange={(e) => setCategoriaProducto(e.target.value)} {...register('categoria', {
                    required: true,
                    minLength: {
                      value: 1,
                    }
                  })} />
                  {errors.categoria?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo Categoria es requerido</p>}
                  {errors.categoria?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo Categoria debe tener al menos 1 letras</p>} */}
                  <select className="form-select my-2" aria-label="Default select example" onChange={(e) => setCategoriaProducto(e.target.value)} {...register('categoria', {
                    required: true,
                    minLength: {
                      value: 1,
                    }
                  })} >
                    <option value="1">Artículos de playa</option>
                    <option value="2">Artículos de camping</option>
                    <option value="3">Artículos deportivos</option>
                    <option value="4">Herramientas</option>
                  </select>
                  {errors.categoria?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo Categoria es requerido</p>}
                  {errors.categoria?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo Categoria debe tener al menos 1 letras</p>}
                </div>
              </Col>
              {/* <Col xs={12} lg={6}>
                <div className='mb-4'>
                  <label className='label-contact'>Cliente:*</label>
                  <input className='form-control my-2' type="text" onChange={(e) => setClienteProducto(e.target.value)} {...register('cliente', {
                    required: true,
                    minLength: {
                      value: 1,
                    }
                  })} />
                  {errors.cliente?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo Cliente es requerido</p>}
                  {errors.cliente?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo Cliente debe tener al menos 1 letras</p>}
                </div>
              </Col> */}
            </Row>
            <button className='btn register-button my-2'>Agregar</button>

          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <div className='mb-4'>
            <button variant="secondary" onClick={handleClose}> Cerrar</button>            
          </div>
        </Modal.Footer> */}
      </Modal>


      <Table striped bordered hover variant="dark" responsive className='caption-top align-middle'>
        <caption>Lista de productos</caption>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descripcion</th>
            <th>Cantidad</th>
            <th>Estado</th>
            <th>Imágen</th>
            <th>Categoría</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto.id_producto}>
              <td>{producto.id_producto}</td>
              <td>{producto.nombre_producto}</td>
              <td>{producto.precio}</td>
              <td>{producto.descripcion_producto}</td>
              <td>{producto.cantidad}</td>
              <td>{producto.estado}</td>
              <td><img src={producto.urlfoto} alt="" width="50" height="50" className='mx-auto d-block img-thumbnail img-table' /></td>
              <td>{producto.categoria}</td>
              <td>
                <Button className='btn btn-primary'><i class="fa-solid fa-pen-to-square"></i> </Button> {"   "}
                <Button className='btn btn-danger'><i class="fa-solid fa-trash"></i> </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>


      {/* <ThemeProvider theme={darkTheme}>
        <Box display="flex" justifyContent="center" alignItems="center">
          <MUIDataTable
            title={"Lista de productos"}
            data={productos}
            columns={columns}
            options={options}
          />
        </Box>
      </ThemeProvider> */}


    </div>
  )
}

export default ProductosEnAlquiler