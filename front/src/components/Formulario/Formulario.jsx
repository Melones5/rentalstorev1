import React from 'react'
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import './Form.css';

const Formulario = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }


  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={8} lg={6}>
            {/** Declaro nuevo usuario */}
            <h1 className='py-5 form-h1'>Nuevo Usuario</h1>
            <h5 className='form-h5'>¡Registrate es gratis!</h5>
            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" className=" form-container-register">
              <div className='mb-4'>
                <label className='label-contact'>Nombre*</label>
                <input className='form-control my-2' type="text" {...register('nombre', {
                  required: true,
                  maxLength: 10
                })} />
                {errors.nombre?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo nombre es requerido</p>}
                {errors.nombre?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener menos de 10 caracteres</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Apellido*</label>
                <input className='form-control my-2' type="text" {...register('apellido', {
                  required: true,
                  maxLength: 10
                })} />
                {errors.apellido?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo apellido es requerido</p>}
                {errors.apellido?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo apellido debe tener menos de 10 caracteres</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Dirección de E-mail*</label>
                <input className='form-control my-2' type="text" {...register('email', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
                {errors.email?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Contraseña*</label>
                <input className='form-control my-2' type="text" {...register('contraseña', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.contraseña?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo contraseña es requerido</p>}
                {errors.contraseña?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del contraseña es incorrecto</p>}
              </div>
              <div className='mb-4'>
                <button className='btn contact-button my-2'>Registrarme</button>
              </div>
              <div className='container'>
                <div className='row'>
                  <div className='col'>
                    <button className='btn contact-button my-2'><i class="fa-brands fa-google"></i> Registrate con google</button>
                  </div>
                  <div className='col'>
                    <button className='btn contact-button my-2'> <i class="fa-brands fa-facebook"></i> Registrate con facebook</button>
                  </div>
                </div>
              </div>
            </form>
          </Col>
           {/** usuario registrado */}
          <Col xs={12} md={8} lg={6}>
            <h1 className='py-5 form-h1'>Usuario Registrado</h1>
            <h5 className='form-h5'>¡Si tiene una cuenta, acceda!</h5>
            <form className='form-container-login'>
              <div className='mb-4'>
                <label className='label-contact'>Dirección de E-mail*</label>
                <input className='form-control my-2' type="text" {...register('emailLogin', {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.emailLogin?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
                {errors.emailLogin?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>}
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Contraseña*</label>
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
              <div>
                <button className='btn contact-button'><i class="fa-brands fa-google"></i> Iniciar sesión</button>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Formulario