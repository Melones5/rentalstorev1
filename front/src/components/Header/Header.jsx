import React from 'react'
import { Navbar, Nav, Container} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './index.css'

import imgLogo from '../../assets/logoRental.png'

const Header = () => {
  return (
    <header>
      <Navbar className="navbar-bg" expand="lg" collapseOnSelect fixed="top"> 
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Brand href="/" className="text-white">
            <img src={imgLogo} widht="40" height="40" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto navbar-header py-2">            
              <NavLink exact="true" to="/" className="py-1 px-2 cursor-pointer" activeClassName="active">Inicio</NavLink>
              <NavLink exact="true" to="/contact" className="py-1 px-2 cursor-pointer" activeClassName="active">Contacto</NavLink>
              <NavLink exact="true" to="/login" className="py-1 px-2 cursor-pointer" activeClassName="active"><i className="fa-solid fa-right-to-bracket"></i> Ingresá</NavLink>
              <NavLink exact="true" to='/cart' className="py-1 px-2 cursor-pointer" activeClassName="active"> <i class="fa-solid fa-cart-shopping"></i> Carrito</NavLink>         
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
