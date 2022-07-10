import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

import LogoMercadopago from '../../assets/logo__mercadopago.png';

const Footer = () => {
  return (
    <footer>
      <Container fluid className="text-white footer-body">
        <Row className="ps-4 pe-4">
          <Col xs={12} md={8} lg={2}>
            <p class='h3 py-3'>Rental Store</p>
          </Col>
          <Col xs={12} md={8} lg={2}>
            <p className='h5 py-3 footer-p'>Categorías</p>
            <ul className='footer-ul'>
              <li>Sombrilla</li>
              <li>Taladro</li>
              <li>Sillones playeros</li>
              <li>Amoladora</li>
              <li>Caña de pescar</li>
              <li>Reposera</li>
            </ul>
          </Col>
          <Col xs={12} md={8} lg={2}>
            <p className='h5 py-3 footer-p'>Lo más buscado</p>
            <ul className='footer-ul'>
              <li>Sombrilla</li>
              <li>Taladro</li>
              <li>Sillones playeros</li>
              <li>Amoladora</li>
              <li>Caña de pescar</li>
              <li>Reposera</li>
            </ul>
          </Col>
          <Col xs={12} md={8} lg={2}>
            <p className='h5 py-3 footer-p'>Cuenta</p>
            <ul className='footer-ul'>
              <li>Registrarse</li>
              <li>Iniciar Sesión</li>
            </ul>
          </Col>
          <Col xs={12} md={8} lg={2}>
            <p className='h5 py-3 footer-p'>Seguinos</p>
            <ul className='footer-ul'>
              <li> <i class="fa-brands fa-facebook"></i> Facebook</li>
              <li> <i class="fa-brands fa-instagram"></i> Instagram</li>
            </ul>
          </Col>
          <Col xs={12} md={8} lg={2}>
            <p className='h5 py-3 footer-p'>Métodos de pago</p>
            <img src={LogoMercadopago} alt="mercadopago-logo" className="footer-img"/>
          </Col>
        </Row>
        <Row className='footer-body text-white footer-color'>
          <Col className='text-center py-3 h9'>
            Copyright &copy; Rental Store
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
