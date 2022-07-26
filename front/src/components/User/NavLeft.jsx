import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './NavLeft.css';
import { NavLink } from 'react-router-dom';
import ProductosEnAlquiler from './ProductosEnAlquiler';

const NavLeft = () => {
  return (
    <>
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-lg-3 d-flex'>
            <div className='account-nav flex-grow-1'>
              <h4>Menu</h4>
              <ul>
                <li><NavLink exact="true" to="/productos-alquiler" className="py-1 px-2 cursor-pointer" activeClassName="active">Producos en alquiler</NavLink></li>
                <li>Productos alquilados</li>
                <li>Historial alquileres</li>
                <li>Logout</li>
              </ul>
            </div>
          </div>
          <div className='col-12 col-lg-9 mt-4 d-flex'>
            <li>Perfil</li>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavLeft