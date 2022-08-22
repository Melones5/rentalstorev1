import React from 'react';
import {Navigate} from 'react-router-dom'
import {UserAuth} from '../context/userContext'

function ProtectecRoute({ children }) {

  const { user } = UserAuth();

  //si no hay usuario logeado en el context, se lo envía al homepage

  if (!user) {
    return <Navigate to='/' />
  }

  return children;
}

export default ProtectecRoute