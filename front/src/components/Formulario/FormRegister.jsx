import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import './Form.css';


const FormRegister = () => {

  let history = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: {
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: '',
        email: '',
        password: '',
        rol: '',
      }
    });

  const onSubmit = (data, e) => axios.post("http://localhost:5000/cliente", data)
  .then(() => {
    console.log("anda")
    swal({
      title: "Usuario",
      text: "Usuario creado de manera correcta",
      icon: "success",
      button: "Aceptar"
    });
    e.target.reset();
    history("/")
  })
  .catch(() =>{
    swal({
      title: "Usario",
      text: "Usuario creado de manera correcta",
      icon: "error",
      button: "Aceptar"
    });
    e.target.reset();
    console.log(data)
  })
  
  
  /**  const onSubmit = async (data, e) => {
    console.log("data", data);
    try {
      const response = await fetch("http://localhost:5000/cliente", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
      });
      console.log(response);
    } catch (error) {
      console.log(e.error)
    }
    alert("Validación exitosa");
    e.target.reset();
  }*/

  return (
    <div>
      <h1 className='pt-5 form-h1'>Nuevo Usuario</h1>
      <h5 className='form-h5'>¡Registrate es gratis!</h5>
      <form className=" form-container-register" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='label-contact'>Nombre:*</label>
          <input className='form-control my-2' type="text" {...register('nombre', {
            required: true,
            maxLength: 10
          })} />
          {errors.nombre?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo nombre es requerido</p>}
          {errors.nombre?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener menos de 10 caracteres</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Apellido:*</label>
          <input className='form-control my-2' type="text" {...register('apellido', {
            required: true,
            maxLength: 10
          })} />
          {errors.apellido?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo apellido es requerido</p>}
          {errors.apellido?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo apellido debe tener menos de 10 caracteres</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Dirección:*</label>
          <input className='form-control my-2' type="text" {...register('direccion', {
            required: true,
            minLength: {
              value: 4,
            }
          })} />
          {errors.direccion?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo dirección es requerido</p>}
          {errors.direccion?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo direccion debe tener al menos 4 letras</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Teléfono:*</label>
          <input className='form-control my-2' type="text" placeholder="(Código de área) Número" {...register('telefono', {
            required: true,
            minLength: {
              value: 10,
            }
          })} />
          {errors.telefono?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo teléfono es requerido</p>}
          {errors.telefono?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El campo teléfono debe tener al menos 10 números</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Dirección de E-mail:*</label>
          <input className='form-control my-2' type="text" {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
          })} />
          {errors.email?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
          {errors.email?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Contraseña:*</label>
          <input className='form-control my-2' type="text" {...register('password', {
            required: true,
            minLength: {
              value: 4,
            }
          })} />
          {errors.password?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo contraseña es requerido</p>}
          {errors.password?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>La contraseña debe tener al menos 4 letras</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Rol:*</label>
          <input className='form-control my-2' type="text" {...register('rol', {
            required: true,
            minLength: {
              value: 7,
            }
          })} />
          {errors.rol?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo rol es requerido</p>}
          {errors.rol?.type === 'minLength' && <p className='text-danger text-small d-block mb-2'>El rol debe tener al menos 6 letras</p>}
        </div>
        <div className='mb-4'>
          <button className='btn register-button my-2'>Registrarme</button>
        </div>
        <div className='container'>
          <div className='row'>
            <hr />
            <p className='text-center label-contact'>
              Registrate con tus redes sociales
            </p>
            <div className='d-flex flex-row mb-3 justify-content-center social-media'>
              <Button className='social-icon facebook'>
                <FaFacebookF />
              </Button>
              <Button className='social-icon google'>
                <FaGoogle />
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormRegister