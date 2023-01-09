import React, { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './index.css'
import CartContext from '../../context/CartContext';
import { useContext } from 'react';
import { UserAuth } from '../../context/userContext'
import imgLogo from '../../assets/logoRental.png'

const Header = () => {
  const { productos } = useContext(CartContext);
  const { user } = UserAuth();
  const [showNav, setShowNav] = useState('false')

  console.log(user)

  //<span>{productos.length}</span>
  // TODO: Preguntar si esto tiene sentido

  if (user === null) {
    return (
      <header>
        <Navbar className="navbar-bg" expand="lg" collapseOnSelect fixed="top">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='burger' />
            <Navbar.Brand href="/" className="text-white">
              <img src={imgLogo} widht="40" height="40" alt="logo" />
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="ms-auto navbar-header py-2">

                <NavLink exact="true" to="/" className="py-1 px-2 cursor-pointer" >Inicio</NavLink>
                <NavLink exact="true" to="/contact" className="py-1 px-2 cursor-pointer" >Contacto</NavLink>

                <NavLink exact="true" to="/login" className="py-1 px-2 cursor-pointer" ><i className="fa-solid fa-right-to-bracket"></i> Ingresá</NavLink>

                {/* Iniciar sesión con las redes sociales */}
                {/* <NavLink exact="true" to="/loginsocial" className="py-1 px-2 cursor-pointer" activeClassName="active"><i className="fa-solid fa-right-to-bracket"></i> SocialLogin</NavLink> */}


                {/* Productos alquilados */}
                {/* <NavLink exact="true" to="/productos_alquilados" className="py-1 px-2 cursor-pointer" activeClassName="active"> Mis Alquileres</NavLink> */}
                {/* <NavLink exact="true" to="/productos_alquiler" className="py-1 px-2 cursor-pointer" activeClassName="active"><i class="fa-solid fa-box-open"></i> Mis Productos</NavLink> */}
                {/* <NavLink exact="true" to="/account" className="py-1 px-2 cursor-pointer" activeClassName="active"><i class="fa-solid fa-user"></i> Cuenta</NavLink> */}

                {/* <NavLink exact="true" to='/cart' className="py-1 px-2 cursor-pointer" > <i className="fa-solid fa-cart-shopping"></i> </NavLink> */}

              </Nav>

            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
  return (
    <header>
      <Navbar className="navbar-bg" expand="lg" collapseOnSelect fixed="top">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='burger' />
          <Navbar.Brand href="/" className="text-white">
            <img src={imgLogo} widht="40" height="40" alt="logo" />
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto navbar-header py-2">

              <NavLink exact="true" to="/" className="py-1 px-2 cursor-pointer" >Inicio</NavLink>
              <NavLink exact="true" to="/contact" className="py-1 px-2 cursor-pointer" >Contacto</NavLink>

              {/* <NavLink exact="true" to="/login" className="py-1 px-2 cursor-pointer" activeClassName="active"><i className="fa-solid fa-right-to-bracket"></i> Ingresá</NavLink> */}

              {/* Iniciar sesión con las redes sociales */}
              {/* <NavLink exact="true" to="/loginsocial" className="py-1 px-2 cursor-pointer" activeClassName="active"><i className="fa-solid fa-right-to-bracket"></i> SocialLogin</NavLink> */}


              {/* Productos alquilados */}
              <NavLink exact="true" to="/productos_alquilados" className="py-1 px-2 cursor-pointer" activeClassName="active"><i class="fa-solid fa-boxes-packing"></i>  Mis Alquileres</NavLink>
              <NavLink exact="true" to="/productos_alquiler" className="py-1 px-2 cursor-pointer"><i className="fa-solid fa-box-open"></i> Mis Productos</NavLink>
              <NavLink exact="true" to="/account" className="py-1 px-2 cursor-pointer" ><i className="fa-solid fa-user"></i> Cuenta</NavLink>

              <NavLink exact="true" to='/cart' className="py-1 px-2 cursor-pointer" > {productos.length} <i className="fa-solid fa-cart-shopping"></i> </NavLink>

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
