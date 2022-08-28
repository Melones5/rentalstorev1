import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col } from 'react-bootstrap';
import './EditUser.css';

// TODO: imports de lo necesario para hacer post
import axios from 'axios';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import Swal from 'sweetalert2'

const ProductosEnAlquiler = () => {

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

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setError('');
    console.log("Evento e", e)
    console.log("data", data)
    try {
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
        timer: 2500
      })
      navigate('/')
    } catch (error) {
      Swal.fire({
        position: 'center',
        width: '32em',
        color: '#fff',
        background: '#f93333',
        icon: 'error',
        iconColor: '#fff',
        title: 'Error al agregar el usuario',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      })
      setError(error.message)
      console.log(error.message)
    }

  }

  const handleChangeNombre = e => {
    setNombreProducto(e.target.value)
  }

  return (
    <div className='py-5'>
      <div className='py-5'>
        <Button variant="primary" onClick={handleShow}>
          Agregar producto
        </Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant='white'>
          <Modal.Title className='text-white mb-1 form-h1'>Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col xs={12} lg={6}>
                <div className='mb-4'>
                  <label className='label-contact'>Nombre:*</label>
                  <input className='form-control my-2' type="text" onChange={handleChangeNombre} {...register('nombre_producto', {
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
              <Col xs={12} lg={6}>
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
              </Col>
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


      {/* <Table striped bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Descripcion</th>
            <th>Estado</th>
            <th>Calificacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>300</td>
            <td>50</td>
            <td>Sombrilla para playa, buena calidad</td>
            <td>Nueva</td>
            <td>0</td>
            <button>eliminar</button>
            <button>editar</button>
          </tr>
        </tbody>
      </Table> */}
    </div>
  )
}

export default ProductosEnAlquiler