import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';

import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import './Form.css';


const FormRegister = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }
  return (
    <div>
      <h1 className='pt-5 form-h1'>Nuevo Usuario</h1>
      <h5 className='form-h5'>¡Registrate es gratis!</h5>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className=" form-container-register">
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
          <button className='btn register-button my-2'>Registrarme</button>
        </div>
        <div className='container'>
          <div className='row'>
            <hr />
            <p className='text-center'>
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