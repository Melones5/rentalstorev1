import React from 'react'
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

import './Form.css';



const FormLogin = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }

  return (
    <div>
      <h1 className='pt-5 form-h1'>Usuario Registrado</h1>
      <h5 className='form-h5'>¡Si tiene una cuenta, acceda!</h5>
      <form className='form-container-login' onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label className='label-contact'>Dirección de E-mail:*</label>
          <input className='form-control my-2' type="text" {...register('emailLogin', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.emailLogin?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
          {errors.emailLogin?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>}
        </div>
        <div className='mb-4'>
          <label className='label-contact'>Contraseña:*</label>
          <input className='form-control my-2' type="text" {...register('contraseña', {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
          })} />
          {errors.contraseña?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo contraseña es requerido</p>}
          {errors.contraseña?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del contraseña es incorrecto</p>}
        </div>
        <div className='mb-4'>
          <a className='text' href='#olvido'>¿Olvido su contraseña?</a>
        </div>
        <div className='d-flex justify-content-between'>
          <Button type="submit" className='login-button'>Registrarme</Button>
          <Button type="submit" className='login-button'>Logearte</Button>
        </div>
        <hr />
        <p className='text-center label-contact'>
          Logeate con tus redes sociales
        </p>
        <div className='d-flex flex-row mb-3 justify-content-center social-media'>
          <Button className='social-icon facebook'>
            <FaFacebookF />
          </Button>
          <Button className='social-icon google'>
            <FaGoogle />
          </Button>
        </div>
      </form>
    </div>
  )
}

export default FormLogin