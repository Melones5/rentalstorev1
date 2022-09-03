import React from 'react'
import { useForm } from "react-hook-form";
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import imgContact from '../../assets/contact.svg'

const Contact = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  }

  return (
    <Container className='py-5'>
      <Row>
        <Col xs={12} lg={6} className='d-flex justify-contenct-center py-5'>
          <img src={imgContact} style={{width: '100%'}} alt="imagen contacto" />
        </Col>
        <Col xs={12} lg={6}>
          <h1 className='text-left h1-contact'> Contáctenos </h1>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">

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
              <label className='label-contact'>Email*</label>
              <input className='form-control my-2' type="text" {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
              })} />
              {errors.email?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo email es requerido</p>}
              {errors.email?.type === 'pattern' && <p className='text-danger text-small d-block mb-2'>El formato del email es incorrecto</p>}
            </div>

            <div className='mb-4'>
              <label className='label-contact'>Asunto*</label>
              <input className='form-control my-2' type="text" {...register('asunto', {
                required: true,
                maxLength: 10
              })} />
              {errors.asunto?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo asunto es requerido</p>}
              {errors.asunto?.type === 'maxLength' && <p className='text-danger text-small d-block mb-2'>El campo nombre debe tener menos de 10 caracteres</p>}
            </div>

            <div className='mb-4'>
              <label className='label-contact'>Mensaje*</label>
              <div className="form-outline">
                <textarea className="form-control my-2" id="textoMensaje" rows="4" type="text" {...register('mensaje', {
                  required: true,
                })}>
                </textarea>
                {errors.mensaje?.type === 'required' && <p className='text-danger text-small d-block mb-2'>El campo mensaje es requerido</p>}
              </div>
            </div>
            <div className='mb-4'>
              <button className='btn contact-button my-2'>Contactar</button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default Contact