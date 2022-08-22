import React from 'react'
import Formulario from '../Formulario/Formulario'
import FormLogin from '../Formulario/FormLogin'
import FormLoginFire  from '../Formulario/FormLoginFire'
import FormRegister from '../Formulario/FormRegister'
import { Container, Row, Col } from 'react-bootstrap'


const Login = () => {
  return (
    <>
      <Container className='py-5'>
        <Row>
          <Col xs={12} md={8} lg={6}>
          {/* <FormLoginFire /> */}
          <FormLogin />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <FormRegister />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Login