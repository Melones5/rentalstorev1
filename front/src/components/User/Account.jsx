import React, { useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

import { useForm, Controller } from "react-hook-form";
//import swal from 'sweetalert';

import Swal from 'sweetalert2'
import axios from 'axios';

import { Container, Row, Col, Button } from 'react-bootstrap';
import { getClienteByEmail } from '../../services/funciones';

import userProfile from '../../assets/user.png'

import './EditUser.css'


import { UserAuth } from '../../context/userContext'

// TODO: en este archivo se debería renderizar todas las vistas de la cuenta de usuario
// TODO: como lo son, ver-productos-alquilados, ver-productos-en-alquiler, perfil (moficiar, alta producto talvez)

const Account = () => {

  const { user, logout } = UserAuth();

  const [clientes, setClientes] = useState('');

  //: TODO: USEFORM del edit cliente
  const { register, handleSubmit, control, reset, formState: { isDirty, errors } } = useForm()

  console.log("isDirty", isDirty)

  //para fire y postgresql
  const [email, setEmail] = useState('');
  //const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  //para postgresql
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');

  const navigate = useNavigate();

  // const resetAsyncForm = useCallback(async () => {
  //   const response = await getClienteByEmail(user.email); 
  //   if (response.status === 200) {
  //     setClientes(response.data)
  //     console.log(response.data)
  //   }
  //   reset(response);
  // }, [reset]);

  // useEffect(() => {
  //   resetAsyncForm()
  // }, [user])

  useEffect(() => {
    async function cargarCliente() {
      const response = await getClienteByEmail(user.email)
      if (response.status === 200) {
        setClientes(response.data)
        console.log(response.data)
      }
      reset(response);
    }
    cargarCliente()
  }, [user, reset])

  // useEffect(() => {
  //   reset(
  //     { nombre: clientes.nombre },
  //     { apellido: clientes.apellido },
  //     { direccion: clientes.direccion },
  //     { telefono: clientes.telefono },
  //   );
  // }, [])
  console.log("nombre cliente", clientes.nombre)

  // TODO: FUNCIÓN LOGOUT DE USER
  const handleLogout = async () => {
    try {
      Swal.fire({
        title: 'Cierre de sesión',
        text: "¿Estás seguro que querés cerrar tu sesión?",
        icon: 'warning',
        color: '#fff',
        background: '#a571ff',
        showCancelButton: true,
        confirmButtonColor: '#8341f4',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Aceptar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: 'Deslogeado',
            text: "Deslogeado correctamente",
            icon: 'success',
            color: '#fff',
            background: '#a571ff'
          })
          logout();
          navigate('/')
          console.log('Deslogeado correctamente')
        }
      })
    } catch (error) {
      console.log(error.message)
    }
  }




  // TODO: función para el submit del form
  const onSubmit = async (data, e) => {
    e.preventDefault();
    setError('');
    console.log("Evento e", e)
    console.log("data", data)
    try {
      data.password = clientes.password;
      data.rol = clientes.rol;
      data.email = user.email;
      data.uid = user.uid;
      axios.put(`http://localhost:5000/cliente/${clientes.id_cliente}`, data)
      //`${baseUrl}/cliente/${email}`
      console.log(data)
      Swal.fire({
        position: 'center',
        width: '32em',
        color: '#fff',
        background: '#a571ff',
        icon: 'success',
        iconColor: '#fff',
        title: 'Usuario modificado de manera correcta',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      })
      navigate('/account')
    } catch (error) {
      Swal.fire({
        position: 'center',
        width: '32em',
        color: '#fff',
        background: '#f93333',
        icon: 'error',
        iconColor: '#fff',
        title: 'Error al modificar el usuario',
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 2500
      })
      setError(error.message)
      console.log(error.message)
    }
  }


  return (
    <div>
      <Container className='py-5'>
        <Row>
          <Col xs={12} md={8} lg={6} className='pb-3'>
            {/* Dar logout */}
            <h1 className='py-5 text-center form-h1'>¡Bienvenido!</h1>
            <img src={userProfile} className="mg-flex  mx-auto d-block userImg img-thumbnail" alt="" />
            <h5 className='text-center form-h1'>Email:</h5>
            <p className='text-center'>{user && user.email}</p>
            <h5 className='text-center form-h1'>Calificación:</h5>
            <p className='text-center'><i class="fa-solid fa-star"></i></p>
            {/* <h5 className='text-center form-h1'>Nombre:</h5>
            <p className='text-center' >{clientes.nombre}</p> */}
            <button className='close-button mx-auto d-block' onClick={handleLogout}>Cerrar sesión</button>
          </Col>

          <Col xs={12} md={8} lg={6}>
            {/* Parte del edit user */}
            <h1 className='py-5 text-center form-h1'>Edite su perfil <i class="fa-solid fa-user-gear"></i></h1>
            <form className="form-container-register" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              {/* <div className='mb-4'>
                <label className='label-contact'>Nombre:*</label>
                <Controller
                  name='nombre'
                  control={control}
                  defaultValue={clientes.nombre}
                  render={({ field }) => (
                    <input
                      className='form-control my-2'
                      type="text"
                      {...field}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  )}
                  rules={{ required: true, minLength: 4, maxLength: 10 }}
                />
                {errors.nombre?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener al menos 4 letras</p>}
                {errors.nombre?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener menos de 10 caracteres</p>}
                {errors.nombre?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo nombre es requerido</p>}
              </div> */}
              {/* <div className='mb-4'>
                <label className='label-contact'>Apellido:*</label>
                <Controller
                  name='apellido'
                  control={control}
                  render={({ field }) => (
                    <input
                      //defaultValue={clientes.apellido}
                      className='form-control my-2'
                      type="text"
                      onChange={(e) => setApellido(e.target.value)}
                      {...register('apellido', {
                        minLength: {
                          value: 4,
                        },
                        maxLength: 10,
                        required: true
                      })} />
                  )}
                />
                {errors.apellido?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo apellido debe tener al menos 4 letras</p>}
                {errors.apellido?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo apellido debe tener menos de 10 caracteres</p>}
                {errors.apellido?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo apellido es requerido</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Dirección:*</label>
                <Controller
                  name='direccion'
                  control={control}
                  render={({ field }) => (
                    < input
                      //defaultValue={clientes.direccion}
                      className='form-control my-2'
                      type="text"
                      onChange={(e) => setDireccion(e.target.value)}
                      {...register('direccion', {
                        minLength: {
                          value: 4,
                        },
                        required: true
                      })} />
                  )}
                />
                {errors.direccion?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo direccion debe tener al menos 4 letras</p>}
                {errors.direccion?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo dirección es requerido</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Teléfono:*</label>
                <Controller
                  name='telefono'
                  control={control}
                  render={({ field }) => (
                    <input
                      //defaultValue={clientes.telefono}
                      className='form-control my-2'
                      type="text"
                      placeholder="(Código de área) Número"
                      onChange={(e) => setTelefono(e.target.value)}
                      {...register('telefono', {
                        minLength: {
                          value: 10,
                        },
                        required: true
                      })} />
                  )}
                />
                {errors.telefono?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo teléfono debe tener al menos 10 números</p>}
                {errors.telefono?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo teléfono es requerido</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Dirección de E-mail:*</label>
                <Controller
                  name='email'
                  control={control}
                  render={({ field }) => (
                    <input
                      //defaultValue={clientes.email}
                      className='form-control my-2'
                      readOnly="readonly"
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      {...register('email', {
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        required: true
                      })} />
                  )}
                /> */}
              {/* {errors.email?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>} 
                {errors.email?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>} */}
              {/* </div> */}
              <div className='mb-4'>
                <label className='label-contact'>Nombre:*</label>
                <input
                  defaultValue={clientes.nombre}
                  className='form-control my-2'
                  type="text"
                  onChange={(e) => setNombre(e.target.value)}
                  {...register('nombre', {
                    minLength: {
                      value: 4,
                    },
                    maxLength: 20,
                    required: true
                  })} />
                {errors.nombre?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo direccion debe tener al menos 4 letras</p>}
                {errors.nombre?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener menos de 20 caracteres</p>}
                {errors.nombre?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo nombre es requerido</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Apellido:*</label>
                <input
                  defaultValue={clientes.apellido}
                  className='form-control my-2'
                  type="text"
                  onChange={(e) => setApellido(e.target.value)}
                  {...register('apellido', {
                    minLength: {
                      value: 4,
                    },
                    maxLength: 20,
                    required: true
                  })} />
                {errors.apellido?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo direccion debe tener al menos 4 letras</p>}
                {errors.apellido?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo apellido debe tener menos de 20 caracteres</p>}
                {errors.apellido?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo apellido es requerido</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Dirección:*</label>
                <input
                  defaultValue={clientes.direccion}
                  className='form-control my-2'
                  type="text"
                  onChange={(e) => setDireccion(e.target.value)}
                  {...register('direccion', {
                    minLength: {
                      value: 4,
                    },
                    required: true
                  })} />
                {errors.direccion?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo direccion debe tener al menos 4 letras</p>}
                {errors.direccion?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo dirección es requerido</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Teléfono:*</label>
                <input
                  defaultValue={clientes.telefono}
                  className='form-control my-2'
                  type="text"
                  placeholder="(Código de área) Número"
                  onChange={(e) => setTelefono(e.target.value)}
                  {...register('telefono', {
                    minLength: {
                      value: 10,
                    },
                    required: true
                  })} />
                {errors.telefono?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo teléfono debe tener al menos 10 números</p>}
                {errors.telefono?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo teléfono es requerido</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Dirección de E-mail:*</label>
                <input
                  defaultValue={clientes.email}
                  className='form-control my-2'
                  readOnly="readonly"
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  {...register('email', {
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    required: true
                  })} />
                {errors.email?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>}
                {errors.email?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
              </div>
              <div className='d-flex justify-content-between'>
                <Button type="submit" className='edit-button mx-auto d-block'>Editar</Button>
              </div>
            </form>
          </Col>

          {/* <Col xs={12} md={8} lg={3}>
            {/* vacio 
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default Account