import React from 'react'
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './EditUser.css'

// TODO: en este archivo se debería renderizar todas las vistas de la cuenta de usuario
// TODO: como lo son, ver-productos-alquilados, ver-productos-en-alquiler, perfil (moficiar, alta producto talvez)

const Account = () => {
  return (
    <div>
      <Container className='py-5'>
        <h1 className='py-5 text-center form-h1'>Edite su perfil <i class="fa-solid fa-user-gear"></i></h1>
        <Row>
          <Col xs={12} md={8} lg={3}>
          {/* vacio */}
          </Col>
          <Col xs={12} md={8} lg={6}> 
            <form action="" className='edit-user'>
              <div className='mb-4'>
                <label className='label-contact'>Nombre:*</label>
                <input 
                  className='form-control my-2' 
                  type="text"
                  id=""
                  name="nombre"
                  defaultValue={"aca va el valor traido de la bd"} 
                />
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Apellido:*</label>
                <input 
                  className='form-control my-2' 
                  type="text"
                  id=""
                  name="apellido"
                  defaultValue={"aca va el valor traido de la bd"} 
                />
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Dirección:*</label>
                <input 
                  className='form-control my-2' 
                  type="text"
                  id=""
                  name="direccion"
                  defaultValue={"aca va el valor traido de la bd"} 
                />
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Teléfono:*</label>
                <input 
                  className='form-control my-2' 
                  type="text"
                  id=""
                  name="telefono"
                  defaultValue={"aca va el valor traido de la bd"} 
                />
              </div>
              <div className='mb-4'>
                <label className='label-contact'>Dirección de E-mail:*</label>
                <input 
                  className='form-control my-2' 
                  type="text"
                  id=""
                  name="email"
                  readOnly="readOnly"
                  defaultValue={"aca va el valor traido de la bd"} 
                />
              </div>
              <button type="submit" className="py-3 mt-2 btn edit-button">Editar</button>
            </form>
          </Col>
          <Col xs={12} md={8} lg={3}>
          {/* vacio */}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Account