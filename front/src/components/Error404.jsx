import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import imgError from '../../src/assets/404-not-found.svg'


const Error404 = () => {
  return (
    <div className='py-5'>
      <Container>
            <Row className="mt-5">
                  <Col md={{ span: 6, offset: 3 }}className='text-center text-white'>
                        <img style={{width: '100%'}} src={imgError} alt="error-404" />
                        <h2 className='py-3'>Upsss... La página que buscas no existe en este universo :c</h2>
                        <p>Vuelve al <NavLink to="/">Inicio</NavLink></p>
                  </Col>
            </Row>
      </Container>
    </div>
  )
}

export default Error404