import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import NavLeft from './NavLeft';

// TODO: en este archivo se debería renderizar todas las vistas de la cuenta de usuario
// TODO: como lo son, ver-productos-alquilados, ver-productos-en-alquiler, perfil (moficiar, alta producto talvez)

const Account = () => {
  return (
    <div>
      <h1 className='py-5 text-center'>CUENTA</h1>
      <NavLeft/>
    </div>
  )
}

export default Account