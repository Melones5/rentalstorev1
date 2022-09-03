import React, { Fragment, useState, useEffect } from 'react'
import { useParams, useNavigate  } from 'react-router-dom'
import axios from 'axios';
import Swal from 'sweetalert2'
import { useForm, Controller } from "react-hook-form";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { UserAuth } from '../../context/userContext'


//TODO: importe para el edit producto
import { Link } from 'react-router-dom'

const EditProduct = () => {
  const { id_producto } = useParams();
  //console.log(id_producto)

  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const [nombreProducto, setNombreProducto] = useState('');
  const [precioProducto, setPrecioProducto] = useState('');
  const [descripcionProducto, setDescripcionProducto] = useState('');
  const [cantidadProducto, setCantidadProducto] = useState('');
  const [estadoProducto, setEstadoProducto] = useState('');
  const [urlProducto, setUrlProducto] = useState('');
  const [categoriaProducto, setCategoriaProducto] = useState('');


  //: TODO: USEFORM del edit producto
  const { register, handleSubmit, control, reset, formState: { isDirty, errors } } = useForm()

  const navigate = useNavigate();

  const { user } = UserAuth();

  

  useEffect(() => {
    const getProducto = async (id_producto) => {
      const response = await axios.get(`http://localhost:5000/producto/${id_producto}`)
      if (response.status === 200) {
        setItems(response.data)
        //console.log(response.data)
      }
      reset(response);
    }
    getProducto(id_producto)
  }, [reset])

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setError('');
    //console.log("Evento e", e)
    //console.log("data", data)
    try {
      data.cliente = user.email;
      await axios.put(`http://localhost:5000/producto/${id_producto}`, data)
      //console.log(data)
      Swal.fire({
        position: 'center',
        width: '32em',
        color: '#fff',
        background: '#a571ff',
        icon: 'success',
        iconColor: '#fff',
        title: 'Producto modificado de manera correcta',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      })
      navigate('/productos_alquiler')
    } catch (error) {
      Swal.fire({
        position: 'center',
        width: '32em',
        color: '#fff',
        background: '#f93333',
        icon: 'error',
        iconColor: '#fff',
        title: 'Error al modificar el producto',
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
      <Container>
        <Row>
          <Col>
            <h1 className='py-5 text-center form-h1'>Edite su producto <i className="fa-solid fa-user-gear"></i></h1>
            <form className="form-container-register" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              {items.map((item) => {
                return (
                  <>
                    <div className='mb-4' key={item.nombre_producto}>
                      <label className='label-contact'>Nombre:*</label>
                      <input className='form-control my-2' defaultValue={item.nombre_producto} type="text" onChange={(e) => setNombreProducto(e.target.value)} {...register('nombre_producto', {
                        required: true,
                        maxLength: 50
                      })}
                      />
                      {errors.nombre_producto?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo nombre es requerido</p>}
                      {errors.nombre_producto?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener menos de 50 caracteres</p>}
                    </div>
                    <div className='mb-4' key={item.precio}>
                      <label className='label-contact'>Precio:*</label>
                      <input className='form-control my-2' type="number" defaultValue={item.precio} min="1" onChange={(e) => setPrecioProducto(e.target.value)}{...register('precio', {
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
                    <div className='mb-4' key={item.descripcion_producto}>
                      <label className='label-contact'>Descripcion:*</label>
                      <div className="form-outline">
                        <textarea className="form-control my-2" id="textoDescripcion" defaultValue={item.descripcion_producto} rows="4" type="text" onChange={(e) => setDescripcionProducto(e.target.value)} {...register('descripcion_producto', {
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
                    <div className='mb-4' key={item.cantidad}>
                      <label className='label-contact'>Cantidad:*</label>
                      <input className='form-control my-2' type="number" defaultValue={item.cantidad} min="1" onChange={(e) => setCantidadProducto(e.target.value)} {...register('cantidad', {
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
                    <div className='mb-4' key={item.estado}>
                      <label className='label-contact'>Estado del producto:*</label>
                      <input className='form-control my-2' type="text" defaultValue={item.estado} onChange={(e) => setEstadoProducto(e.target.value)} {...register('estado', {
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
                    <div className='mb-4' key={item.urlfoto}>
                      <label className='label-contact'>Url del producto:*</label>
                      <input className='form-control my-2' type="text" defaultValue={item.urlfoto} onChange={(e) => setUrlProducto(e.target.value)} {...register('urlfoto', {
                        required: true,
                        minLength: {
                          value: 4,
                        }
                      })} />
                      {errors.urlfoto?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo Url es requerido</p>}
                      {errors.urlfoto?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo Url debe tener al menos 4 letras</p>}
                    </div>
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
                      <select className="form-select my-2"  defaultValue={item.categoria} aria-label="Default select example" onChange={(e) => setCategoriaProducto(e.target.value)} {...register('categoria', {
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
                  </>
                )
              })}
              <div className='d-flex justify-content-between'>
                <Button type="submit" className='edit-button mx-auto mb-2 d-block'><i className="fa-solid fa-pen-to-square"></i> Editar</Button>                
              </div>
              <div className='align-items-start'>
                <Link to={'/productos_alquiler'} style={{textDecoration: "none"}}>
                  <Button type="submit" className='edit-button mx-auto d-block'><i className="fa-solid fa-left-long"></i> Volver</Button>
                </Link>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EditProduct